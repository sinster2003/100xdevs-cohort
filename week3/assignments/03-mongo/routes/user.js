const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db/index");
const bcrypt = require("bcrypt");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const {username, password} = req.body;
    const saltRounds = 10;

    const user = new User({
        username,
        password: await bcrypt.hash(password, saltRounds)
    });

    try {
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    }
    catch(error) {
        res.status(400).json({error: error.message});
    }
    
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic

    Course.find({})
    .then((result) => {
        res.status(200).json({courses: result});
    })
    .catch(() => {
        res.status(404).json({error: "Could not find"});
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const {username} = req.headers;
    console.log(username);

    try {
        const courseToBePurchased = await Course.findById(courseId);

        console.log(courseToBePurchased);

        const user = await User.findOne({username});

        user.purchasedCourses = user.purchasedCourses.concat(courseToBePurchased._id);

        await user.save();

        res.status(200).json({ message: 'Course purchased successfully' });
    }
    catch(error) {
        res.status(500).json({error: error.message});
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const {username} = req.headers;

    try {
        const user = await User.findOne({username}).populate("purchasedCourses");

        res.status(200).json({purchasedCourses: user.purchasedCourses})
    }
    catch(error) {
        res.status(500).json({error: error.message});
    }
});

module.exports = router