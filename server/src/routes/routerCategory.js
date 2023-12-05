const { Router } = require("express");
const router = Router();

//Middlewares
const upload = require("../middlewares/Multer/upload");
const uploadImage = require('../middlewares/Cloudinary/uploadImage');

//Controllers
const postCategory = require('../controllers/Category/postCategory');
const putCategory = require("../controllers/Category/putCategory");
const deleteCategory = require("../controllers/Category/deleteCategory");

//POST
router.post("/", upload, async (req, res) => {
  try {
    const { name, description } = req.body;
    let img = req.file && req.file.buffer;

    const result = await uploadImage(img);
    img = result.secure_url;

    const newCategory = await postCategory({ name, img, description });

    return res.status(200).json(newCategory);
  } catch (error) {
    console.log(error.message);

    res.status(500).json({ error: error.message });
  };
});


//PUT
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updateCategory = await putCategory(id, updateData);

    return res.status(200).json(updateCategory);
  } catch (error) {
    console.log(error.message);

    res.status(500).json({ error: error.message });
  };
});

router.put("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const category = await deleteCategory(id);

    return res.status(200).json(category);
  } catch (error) {
    console.log(error.message);

    res.status(500).json({ error: error.message });
  };
});

module.exports = router;