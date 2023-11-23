const { Router } = require("express");
const router = Router();

const postAdmin = require('../controllers/Admin/postAdmin');

router.post("/", async (req, res) => {
  try {
    const { idUser, store, description, contact } = req.body;

    const newAdmin = await postAdmin({ idUser, store, description, contact });

    return res.status(200).json(newAdmin);
  } catch (error) {
    console.log(error.message);

    res.status(404).json({ error: error.message });
  };
});

module.exports = router;