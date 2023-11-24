const { Router } = require("express");
const router = Router();

const signUp = require('../controllers/User/signUp');



router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, phoneNumber, address } = req.body;

    const newUser = await signUp({ name, email, password, phoneNumber, address });

    return res.status(200).json(newUser);
  } catch (error) {
    console.log(error.message);

    res.status(404).json({ error: error.message });
  };
});

module.exports = router;