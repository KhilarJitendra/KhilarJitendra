const express = require("express");
const router = express.Router();
const request = require("request");
const csv = require("csv-parser");
const fs = require("fs-extra");
const XLSX = require("xlsx");
// const { json } = require("express");
const axios = require("axios");






router.get("/", async (req, res, next) => {
  


  const jsondata = JSON.parse(fs.readFileSync('../config.json'));
  console.log('JSON DATA',jsondata.assignedTo)

  // const workbook = await XLSX.readFile('https://docs.google.com/spreadsheets/d/14N2Ob5-fMHDWbU9p26mpBVuVupV2WnCGsrAC5pnWxuY/gviz/tq?tqx=out:csv&sheet=Task%20List');
  // const worksheet = workbook.Sheets[sheetName];
  // const data = XLSX.utils.sheet_to_json(worksheet);

  // console.log('actual data',data)

  // fs.readFile('./config.json','utf-8',(err,data) => {
  //   // const parseddata = JSON.parse(JSON.stringify(data));
  //   console.log('JSON data',typeof(data))
  //   // owner = parseddata.assignedTo;
  //   if(err) throw err;
  //   // console.log(owner);
  // })


  await axios
    .get(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTll1DTciIbS7lsdkjYmgrFnhnD4AJlmtq8u9AZOOAJDWdHzpkdVVbMRXQPNVGXvyFvzMNvv1C7O5JO/pubhtml",
      {
        responseType: "arraybuffer",
      }
    )
    .then((response) => {
      const workbook = XLSX.read(response.data, { type: "buffer" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);

      let actualData = [];

      data.forEach((item) => {
        if (item.Owner == jsondata.assignedTo) {
          actualData.push(item);
        }
      });

      return res.json(actualData);
    })
    .catch((error) => {
      console.error(error);
    });
});

module.exports = router;
