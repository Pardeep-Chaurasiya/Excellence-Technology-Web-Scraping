const express = require("express");
const router = require("./routes/routes");
const app = express();
const axios = require("axios");
const cheerio = require("cheerio");
// (async () => {
//   try {
//     const flipkartUrl = "https://www.flipkart.com/search?q=mobile";
//     const res = await axios.get(flipkartUrl);
//     const $ = cheerio.load(res.data);

//     const mainDiv = $("div._2kHMtA");
//     console.log(mainDiv.length);
//     console.log(typeof mainDiv);

//     // for (i = 0; i < mainDiv.length; i++) {
//     //   const title = $("div._4rR01T").text();
//     //   console.log(title);
//     //   const disPrice = $("div._1_WHN1").text().trim();
//     //   const actualPrice = $("div._27UcVY").text().trim();
//     //   const disPercentage = $("div._3Ay6Sb").text().trim();
//     //   console.log(disPrice);
//     //   console.log(actualPrice);
//     //   console.log(disPercentage);
//     //   const imgURL = $("._396cs4");
//     //   for (i = 0; i < imgURL.length; i++) {
//     //     console.log(imgURL[i].attribs.src);
//     //   }
//     // }
//     // $("div._2kHMtA").each((element) => {
//     //   const title = $(element).find("div._4rR01T").text();
//     //   console.log(title);
//     //   const disPrice = $(element).find("div._1_WHN").text();
//     //   console.log(disPrice);
//     // });

//     const products = {};

//     // $("._1AtVbE").each((index, element) => {
//     //   const title = $(element).find("._4rR01T").text().trim();
//     //   let price = {};
//     //   price.Actualprice = $(element).find("div._27UcVY").text().trim();
//     //   price.discountPrice = $(element).find("div._1_WHN1").text().trim();
//     //   price.discountPercentage = $(element).find("div._3Ay6Sb").text().trim();
//     //   const rating = $(element).find("div._3LWZlK").text().trim();
//     //   const url = flipkartUrl + $(element).find("a").attr("href");

//     //   products.title = title;
//     //   products.price = price;
//     //   products.rating = rating;
//     //   products.productURL = url;
//     //   console.log(products);
//     // });
//     // return products;
//   } catch (error) {
//     console.log(error);
//   }
// })();

app.use("/", router);
app.listen(4000, () => {
  console.log("Server started at port 4000");
});
