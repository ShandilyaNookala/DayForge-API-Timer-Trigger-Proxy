const fetch = require("node-fetch");

module.exports = async function sendAPI(
  typeOfRequest,
  url,
  data = { nothing: null },
  token = null
) {
  let dataReturned;
  if (typeOfRequest === "GET")
    dataReturned = await (
      await fetch(url, {
        method: typeOfRequest,
        credentials: "include",
      })
    ).json();
  else {
    const res = await fetch(url, {
      method: typeOfRequest,
      headers: {
        "Content-type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Request failed with status ${res.status}: ${errorText}`);
    }
    dataReturned = await res.json();
  }
  return dataReturned;
};
