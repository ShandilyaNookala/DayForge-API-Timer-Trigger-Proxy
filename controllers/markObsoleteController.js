const sendAPI = require("../utils/sendAPI");

exports.markObsolete = async (req, res) => {
  try {
    const baseUrl = process.env.DAYFORGE_API_BASE_URL;

    const response = await sendAPI("POST", `${baseUrl}/auth/login`, {
      userName: process.env.GOOGLE_CLOUD_USERNAME,
      password: process.env.GOOGLE_CLOUD_PASSWORD,
    });

    if (response.status !== "success") {
      throw new Error("Authentication failed: " + response.message);
    }

    const markObsoleteResponse = await sendAPI(
      "POST",
      `${baseUrl}/records/mark-obsolete`,
      { nothing: null },
      response.token
    );

    if (markObsoleteResponse.status !== "success") {
      throw new Error(
        "Failed to mark obsolete items: " + markObsoleteResponse.message
      );
    }

    res.status(200).json({
      status: "success",
      message: "Obsolete items marked successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
