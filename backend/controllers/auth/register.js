import User from "../../models/User.js";

const register = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      password,
      dob,
      gender,
      city,
      state,
      segment,
      cause,
    } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Create a new user
    const user = await User.create({
      name,
      email,
      phone,
      password,
      dob,
      gender,
      city,
      state,
      segment,
      cause,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default register;
