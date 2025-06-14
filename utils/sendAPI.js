const fetch = require("node-fetch");

module.exports = async function sendAPI(
  typeOfRequest,
  url,
  data = { nothing: null }
) {
  try {
    let dataReturned;
    if (typeOfRequest === "GET")
      dataReturned = await (
        await fetch(url, {
          method: typeOfRequest,
          credentials: "include",
        })
      ).json();
    else
      dataReturned = await (
        await fetch(url, {
          method: typeOfRequest,
          headers: {
            "Content-type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(data),
        })
      ).json();
    return dataReturned;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
