let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
// Product Model
let productSchema = require('../models/product.model');

// CREATE User
router.route('/create-product').post((req, res, next) => {
    productSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});
// READ Users
router.route('/').get((req, res, next) => {
    productSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});
// Get Single User
router.route('/edit-product/:id').get((req, res, next) => {
    productSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update User
router.route('/update-product/:id').put((req, res, next) => {
        productSchema.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, (error, data) => {
            if (error) {
                return next(error);
                console.log(error)
            } else {
                res.json(data)
                console.log('Product updated successfully !')
            }
        })
    })
    // Delete Student
router.route('/delete-product/:id').delete((req, res, next) => {
    productSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})
module.exports = router;