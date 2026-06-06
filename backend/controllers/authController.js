const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required",
      });
    }

    // Mock User
    const mockUser = {
      email: "admin@netflix.com",
      password: "123456",
      name: "Netflix Admin",
    };

    // Check Credentials
    if (
      email === mockUser.email &&
      password === mockUser.password
    ) {
      return res.status(200).json({
        success: true,
        message: "Login Successful",
        user: {
          name: mockUser.name,
          email: mockUser.email,
        },
      });
    }

    return res.status(401).json({
      success: false,
      message: "Invalid Email or Password",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  loginUser,
};