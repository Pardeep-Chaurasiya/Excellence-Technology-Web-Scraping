const express = require("express");
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

const app = express();

async function run() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://www.flipkart.com/search?q=mobile");
  //   const html = await page.content();

  //   const links = await page.evaluate(() =>
  //     Array.from(document.querySelectorAll(" ._1fQZEK"), (e) => e.href)
  //   );

  //   const links = await page.$$eval("._1fQZEK", (e) =>
  //     e.map((e) => ({
  //       link: e.href,
  //     }))
  //   );
  //   console.log(links);

  //   const productName = await page.evaluate(() => {
  //     Array.from(document.querySelector("._30jeq3"), (e) => e.innerTEXT);
  //   });

  //   console.log(productName);

  const pageData = await page.evaluate(() => {
    return {
      // html: document.documentElement.innerHTML,
    };
  });
  const $ = cheerio.load(pageData.html);
  const price = $("._30jeq3");
  console.log(price.text());
  // const title = $("._4rR01T");
  // console.log(title.text());
  const imgURL = $("._396cs4");
  const disPrice = $("._3I9_wc ");
  console.log(disPrice);
  // console.log(imgURL.length);
  // for (i = 0; i < imgURL.length; i++) {
  //   console.log(imgURL[i].attribs.src);
  //   console.log(imgURL[i].attribs.alt);
  //   console.log("------", imgURL[i]);
  // }
  // imgURL.forEach((element) => {
  //   console.log(element);
  // });
  // console.log(imgURL.src);
  await browser.close();
}
run();

app.listen(4000, () => {
  console.log("Server started at port 4000");
});
