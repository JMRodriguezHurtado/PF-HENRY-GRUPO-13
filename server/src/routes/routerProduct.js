const { Router } = require("express");
const router = Router();

const postProduct = require('../controllers/Product/postProduct');
const getAllProducts = require("../controllers/Product/getAllProduct");


//POST
router.post("/", async (req, res) => {
  try {
    const { name, brand, sale, category, img, description, price, quantity } = req.body;

    const newProduct = await postProduct({ name, brand, sale, category, img, description, price, quantity });

    return res.status(200).json(newProduct);
  } catch (error) {
    console.log(error.message);

    res.status(404).json({ error: error.message });
  };
});


//GET
router.get("/", async (req, res) => {
  try {
    const results = await getAllProducts();
    return res.status(200).json(results);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;