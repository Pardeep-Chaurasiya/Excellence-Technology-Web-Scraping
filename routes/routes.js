const express = require("express");
const fetchFlipkart = require("../controller/fetchFlipkart");

const router = express.Router();

router.get("/fetch/flipkart/mobile", fetchFlipkart.fetchMobile);
router.get("/fetch/flipkart/tshirt", fetchFlipkart.fetchTShirt);
router.get("/fetch/flipkart/mobile/full", fetchFlipkart.fetchMobileFull);

module.exports = router;
