import User from "../../models/User";

const login = async (req, res) => {
  try {
    const { firstName, email, password } = req.body;

    if (!firstName || !password || !email)
      res
        .status(404)
        .json({ message: "Thou shalt not pass. Missing Information." });

    const user = await User.findOne({ email });
    if (!user) res.status(404).json({ message: "Thou does not exist." });

    const passcorrect = await User.comparePassword(password);

    if (!passcorrect)
      res
        .status(401)
        .json({ message: "Thou art an imposter. Incorrect Password." });
    else res.status(200).json({ user: user });
  } catch (error) {
    res.status(400).json({
      message:
        "EVIL MEOW INCORPORATED IS SAD TO INFORM THAT THERE HAS BEEN SOME ERROR. WE WILL BE BACK WITH YOU SHORTLY.",
      error: error.message,
    });
  }
};

export default login;
