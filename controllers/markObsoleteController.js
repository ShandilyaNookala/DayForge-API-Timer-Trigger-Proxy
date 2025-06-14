const sendAPI = require("../utils/sendAPI");

exports.markObsolete = async (req, res) => {
  try {
    const baseUrl = process.env.DAYFORGE_API_BASE_URL;

    await sendAPI("POST", `${baseUrl}/auth/login`, {
      userName: process.env.GOOGLE_CLOUD_USERNAME,
      password: process.env.GOOGLE_CLOUD_PASSWORD,
    });

    await sendAPI("POST", `${baseUrl}/mark-obsolete`);

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
