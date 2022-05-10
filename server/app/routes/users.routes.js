let mongoose = require('mongoose'),
    express = require('express'),
    multer = require('multer'),
    router = express.Router();
var jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

const { v4: uuidv4 } = require('uuid');
uuidv4();
//  User Model
let userSchema = require('../models/user.model');
const DIR = './public/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});


var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

router.put('/user-profile/:id', upload.single('profileImg'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    userSchema.findByIdAndUpdate(req.params.id, {
        $set: { picture: url + '/public/' + req.file.filename }
    }, (error, data) => {
        if (error) {
            console.log(req.files);
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Student updated successfully !')
        }
    })
})

// CREATE User
router.route('/create-user').post((req, res, next) => {
    userSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});
// READ User
router.route('/').get((req, res, next) => {
    userSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});
// Get Single User ID
router.route('/user/:id').get((req, res, next) => {
    userSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get Single User Email
router.route('/resetPass/:confirmationCode').get((req, res, next) => {
    userSchema.findOne({ confirmationCode: req.params.confirmationCode }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/singin/linkedin').post((req, res, next) => {
    userSchema.findOne({ email: req.body.email, }).populate("roles", "-__v")
        .exec((err, user) => {
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }
            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400, // 24 hours
            });
            var authorities = [];

            res.status(200).send({
                id: user._id,
                username: user.username,
                email: user.email,
                roles: authorities,
                accessToken: token,
                status: user.status,
            });
        })
})



// Update User
router.route('/update-user/:id').put((req, res, next) => {
    userSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Student updated successfully !')
        }
    })
})

// Find user role by id
router.route('/user-role/:id').get((req, res, next) => {
    userSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data.role)
        }
    })
})


// Find user role bu unsername
router.route('/usern-role/:username').get((req, res, next) => {
    userSchema.findOne({ username: req.params.username }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data.role)
        }
    })
})



// Delete User
router.route('/delete-user/:id').delete((req, res, next) => {
    userSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})


router.route('/users-patients/:role').get((req, res, next) => {
    userSchema.find({ role: req.params.role }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = router;