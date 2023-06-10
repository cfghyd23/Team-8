import User from "../../models/User";

export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile,
      impressions,
    } = req.body;

    const emailAlreadyExists = await User.findOne({ email });
    if (emailAlreadyExists) {
      res.status(400).json("Email already exists");
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      validate,
      password,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });

    res.status(202).json({
      msg: user,
    });
  } catch (error) {
    res
      .status(400)
      .json({
        message:
          "EVIL MEOW INCORPORATED IS SAD TO INFORM THAT THERE HAS BEEN SOME ERROR. WE WILL BE BACK WITH YOU SHORTLY.",
        error: error.message,
      });
  }
};
