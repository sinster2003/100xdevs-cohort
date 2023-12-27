const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const bcrypt = require("bcrypt");
const {Admin, Course, User} = require("../db/index");
const jwt = require("jsonwebtoken");

// Admin Routes
router.get("/profile", adminMiddleware, async (req, res) => {
    const {username} = jwt.decode(req.headers.authorization.replace("Bearer ",""));
    
    try {
        const currentAdmin = await Admin.findOne({username}).populate("createdCourses");
        res.status(200).json({profile: currentAdmin});
    }
    catch(error) {
        res.status(404).json({error: "Admin Not Found"});
    }
});

router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const {username, password} = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const admin = new Admin({
        username,
        password: hashedPassword,
    });

    try {
        const result = await admin.save();
        res.status(201).json(result);
    }
    catch(error) {
        res.status(400).json({error: error.message});
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const {username, password} = req.body;

    try {
        const isAdmin = await Admin.findOne({username});

        if(isAdmin) {
            const isPasswordEqual = await bcrypt.compare(password,isAdmin.password);
            if(isPasswordEqual) {
                // token generation
                const token = jwt.sign({username}, process.env.JWT_PASSWORD);
                res.status(200).json({token});
            }
            else {
                res.status(403).json({error: "Username or password incorrect"});
            }   
        }
        else {
            res.status(404).json({error: "Username Not Found"});
        }
    }
    catch(error) {
        res.status(500).json({error: "Something went wrong"})
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const { title, description, price, imageLink } = req.body;
    
    const course = new Course({
        title,
        description,
        price,
        imageLink,
        published: true
    })

    const savedCourse = await course.save();

    const decodedAdmin = jwt.decode(req.headers.authorization.replace("Bearer ",""));

    const adminWithCourse = await Admin.findOne({username: decodedAdmin.username});

    adminWithCourse.createdCourses = adminWithCourse.createdCourses.concat(savedCourse._id);

    await adminWithCourse.save();

    res.status(201).json({ message: 'Course created successfully', courseId: savedCourse._id })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    try {
    const allCourses = await Course.find({});

    res.status(200).json({courses: allCourses});
    }
    catch(error) {
        res.status(500).json({error: "Something went Wrong"});
    }
});

module.exports = router;