const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");
const bcrypt = require("bcrypt");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const adminBody = req.body;
    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(adminBody.password, saltRounds);

    const admin = new Admin({
        username: adminBody.username,
        password: hashedPassword
    });

    admin.save()
    .then(() => {
        res.status(201).json({ message: 'Admin created successfully' });
    })
    .catch((error) => {
        res.status(400).json({error: error.message})
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const { title, description, price, imageLink} = req.body;   

    const course = new Course({
        title,
        description,
        price,
        imageLink,
        published: true
    })

    course.save()
    .then((result) => {
        res.status(201).json({ message: 'Course created successfully', courseId: result._id});
    })
    .catch((error) => {
        res.status(400).json({error: error.message});
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({})
    .then((result) => {
        res.status(200).json({courses: result});
    })  
    .catch(() => {
        res.status(500).json({error: "Something went wrong"});
    })
});

module.exports = router;