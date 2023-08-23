const axios = require("axios");
const cheerio = require("cheerio");

const fetchMobile = async (req, res) => {
  try {
    const flipkartUrl = "https://www.flipkart.com/search?q=mobile";
    const response = await axios.get(flipkartUrl);
    const $ = cheerio.load(response.data);

    const products = [];

    $("._1AtVbE").each((index, element) => {
      const title = $(element).find("._4rR01T").text().trim();
      let price = {};
      price.Actualprice = $(element).find("div._27UcVY").text().trim();
      price.discountPrice = $(element).find("div._1_WHN1").text().trim();
      price.discountPercentage = $(element).find("div._3Ay6Sb").text().trim();
      const url = flipkartUrl + $(element).find("a").attr("href");

      products.push({ title: title, price: price, url: url });
    });

    res.status(200).json({
      message: "Data fetch successfully",
      products,
    });
  } catch (error) {
    console.log(error);
  }
};

const fetchTShirt = async (req, res) => {
  try {
    const flipkartUrl = "https://www.flipkart.com/search?q=t+shirts";
    const response = await axios.get(flipkartUrl);
    const $ = cheerio.load(response.data);

    const tShirt = [];

    $("._1xHGtK").each((index, element) => {
      const sponsored = $(element).find("div._2WkVRV").text().trim();
      const price = {};
      price.Actualprice = $(element).find("div._3I9_wc").text().trim();
      price.discountPrice = $(element).find("div._30jeq3").text().trim();
      price.discountPercentage = $(element).find("div._3Ay6Sb").text().trim();
      const tshirtImage = $(element).find("._2r_T1I").attr("src");
      const tShirtUrl = $(element).find("._2UzuFa").attr("href");
      tShirt.push({
        sponsored: sponsored,
        price: price,
        tshirtImage: tshirtImage,
        tShirtUrl: tShirtUrl,
      });
    });
    res.status(200).json({
      message: "Data fetch successfully",
      tShirt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const fetchMobileFull = async (req, res) => {
  try {
    const flipkartUrl = "https://www.flipkart.com/search?q=mobile";
    const response = await axios.get(flipkartUrl);
    const $ = cheerio.load(response.data);

    const products = [];

    $("._1AtVbE").each((index, element) => {
      const title = $(element).find("._4rR01T").text().trim();
      let price = {};
      price.Actualprice = $(element).find("div._27UcVY").text().trim();
      price.discountPrice = $(element).find("div._1_WHN1").text().trim();
      price.discountPercentage = $(element).find("div._3Ay6Sb").text().trim();
      const url = flipkartUrl + $(element).find("a").attr("href");
      const rating = {};
      rating.starRating = $(element).find("div._3LWZlK").text().trim();
      rating.ratings = $(element).find("span._13vcmD").prev().text();
      rating.review = $(element).find("span._13vcmD").next().text();
      const deliverBy = $(element).find("div._3tcB5a ").text().trim();
      const desc = $(element).find("ul._1xgFaf ").text().trim();
      products.push({
        title: title,
        price: price,
        rating: rating,
        url: url,
        deliverBy: deliverBy,
        desc: desc,
      });
    });

    res.status(200).json({
      message: "Data fetch successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
module.exports = { fetchMobile, fetchTShirt, fetchMobileFull };
