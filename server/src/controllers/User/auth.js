const { OAuth2Client } = require("google-auth-library");
const User = require("../../models/User");
const signTokens = require('../../middlewares/Tokens/signTokens');
const sendVerifyEmail = require('../../middlewares/Email/sendVerifyEmail');

const googleClientId = process.env.CLIENT_ID;
const googleClient = new OAuth2Client(googleClientId);

const authenticateWithGoogle = async (token) => {
  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: googleClientId,
    });

    const { email, name, picture } = ticket.getPayload();

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ email, name, img: picture || ''});
      await user.save();
    };

    const { accessToken, refreshToken } = signTokens(user._id);

    if (user.verify === false) {
      await sendVerifyEmail(user.email, user._id);
    };

    const data = {
      name: user.name,
      img: picture,
      message: 'Usuario creado con exito!.'
    };

    return { access: true, accessToken, refreshToken, data };
  } catch (error) {
    console.error("Error authenticating with Google:", error);
    throw { access: false, error: "Invalid Google token" };
  };
};

module.exports = authenticateWithGoogle;