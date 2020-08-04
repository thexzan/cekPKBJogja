const axios = require("axios");

exports.handler = function (event, context, callback) {
  const { nopolisi } = JSON.parse(event.body);
  const send = data => {
    callback(null, {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Content-type": "Application/json"
      },
      body: JSON.stringify(data)
    });
  };

  const scrap = async nopolisi => {
    console.log(`\n🚀 CEK PKB.. ${nopolisi}`);
    let data = await axios({
      method: "POST",
      url: "http://36.66.168.197:8484/esamsatnas/r_infopkbad.php",
      params: {
        nopolisi
      }
    });
    // console.log(data.data);
    send(data.data);
  };

  scrap(nopolisi);
};
