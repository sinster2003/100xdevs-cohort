const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// User Routes
router.get("/profile", userMiddleware, async (req, res) => {
    const {username} = jwt.decode(req.headers.authorization.replace("Bearer ",""));
    
    try {
        const currentUser = await User.findOne({username}).populate("purchasedCourses");
        res.status(200).json({profile: currentUser});
    }
    catch(error) {
        res.status(404).json({error: "User Not Found"});
    }
});

router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;

  const saltRounds = 10;

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    password: hashedPassword,
  });

  try {
    const result = await user.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/signin", async (req, res) => {
  // Implement user signup logic

  const { username, password } = req.body;

  try {
    const isUser = await User.findOne({ username });

    if (isUser) {
      const isPasswordEqual = await bcrypt.compare(password, isUser.password);

      if (isPasswordEqual) {
        const token = jwt.sign({ username }, process.env.JWT_PASSWORD);
        res.status(200).json({ token });
      } else {
        res.status(403).json({ error: "Username or password incorrect" });
      }
    } else {
      res.status(404).json({ error: "User Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const allCourses = await Course.find({});

    res.status(200).json({courses: allCourses});
    }
    catch(error) {
        res.status(500).json({error: "Something went Wrong"});
    }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
    const courseId = req.params.courseId;
    const {username} = jwt.decode(req.headers.authorization.replace("Bearer ", ""));

    try {
        const courseToBePurchased = await Course.findById(courseId);

        const user = await User.findOne({username});

        user.purchasedCourses = user.purchasedCourses.concat(courseToBePurchased._id);

        await user.save();

        res.status(201).json({ message: 'Course purchased successfully' });
    }
    catch(error) {
        res.status(500).json({error: error.message});
    }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic

    const {username} = jwt.decode(req.headers.authorization.replace("Bearer ", ""));

    try {
        const user = await User.findOne({username}).populate("purchasedCourses");
        res.status(200).json({purchasedCourses: user.purchasedCourses});
    }
    catch(error) {
        res.status(500).json({error: error.message});
    }
});

module.exports = router;
