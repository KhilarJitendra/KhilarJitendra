// const express = require("express");
// const router = express.Router();
// const fs = require("fs");
// const XLSX = require("xlsx");
// const { json } = require("express");
// const axios = require("axios");

// router.get("/", async (req, res, next) => {

//   console.log('Req....')

//   // fs.readFile("extractor-config.json", "utf8", (err, data) => {
//   //   const configData = JSON.parse(data);

//   //   // Read the Google Sheet

//   //   const axios = require("axios");
//   //   const XLSX = require("xlsx");
//   //   const url = configData.sheets[0].url;
//   //   const owner = configData.assignedTo;

//   //   console.log('Dataa are...',data)

//   //   // axios
//   //   //   .get(url, {
//   //   //     responseType: "arraybuffer",
//   //   //   })
//   //   //   .then((response) => {
//   //   //     const workbook = XLSX.read(response.data, { type: "buffer" });
//   //   //     const sheetName = workbook.SheetNames[0];
//   //   //     const worksheet = workbook.Sheets[sheetName];
//   //   //     const data = XLSX.utils.sheet_to_json(worksheet);

//   //   //     let actualData = [];

//   //   //     data.forEach((item) => {
//   //   //       if (item.Owner == owner) {
//   //   //         actualData.push(item);
//   //   //       }
//   //   //     });

//   //   //     res.json(actualData);
//   //   //   })
//   //   //   .catch((error) => {
//   //   //     console.error(error);
//   //   //   });
//   // });
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", async (req, res, next) => {


  fs.readFile("extractor-config.json", "utf8", (err, data) => {

          const configData = JSON.parse(data);
          return res.json(configData)

  });




  // return res.json({
  //   title: "Express Testing",
  //   message: "The app is working properly!",
  // });
});

module.exports = router;
