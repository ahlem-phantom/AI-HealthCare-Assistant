let mongoose = require('mongoose'),
request = require('request'),
cheerio = require('cheerio'),
  express = require('express'),
  multer = require('multer'),
  router = express.Router();
  const { v4: uuidv4 } = require('uuid');
  uuidv4();

  //  Blog Model
let blogSchema = require('../models/blog.model');


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

router.post('/create-blog', upload.single('profileImg'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
      const blog = new blogSchema({
        _id: new mongoose.Types.ObjectId(),
        title : req.body.title,
        description : req.body.description,
        doctors : req.body.doctors, 
        category : req.body.category,       
        picture : url + '/public/' + req.file.filename
    });
    blog.save().then(result => {
      res.status(201).json({
          message: "Blog registered successfully!",
      })
  }).catch(err => {
      console.log(err),
          res.status(500).json({
              error: err
          });
  })
})
// READ Blog
router.route('/').get((req, res, next) => {
    blogSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get Single Blog
router.route('/blog/:id').get((req, res, next) => {
    blogSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Get Doctor Blogs
router.route('/blog-doctor/:doctors').get((req, res, next) => {
  blogSchema.find({doctors : req.params.doctors}, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})

// Update Blog
router.route('/update-blog/:id').put((req, res, next) => {
    blogSchema.findByIdAndUpdate(req.params.id, {
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
// Delete Blog
router.route('/delete-blog/:id').delete((req, res, next) => {
    blogSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

router.route('/test').get(async (req,res) => {  
  let datas = [];
  const { tag } = req.query;
  request(`https://blogs.webmd.com/webmd-doctors/default.htm`,(err,response,html) => {

   if(response.statusCode === 200){
      const $ = cheerio.load(html);
      $('.posts-list-post-content').each((i,el) => {
            console.log(el);
          const link = $(el).find('a').attr('href');
          const title = $(el).find('h3').text(); 
          const desc = $(el).find('p').text(); 
          const author = $(el).find('span').text(); 
          let data = {
              title,
              link,
              desc,
              author
          }      
          datas.push(data);      
      })  
   } 
  console.log(datas);   
  res.json(datas);

  })
})

router.route('/search-blog/:text').get((req, res, next) => {
  blogSchema.find({
    $or: [{
      title: {
        '$regex': req.params.text,
      }
    },
    {
      description: {
        '$regex': req.params.text,
      }
    }]
  }, function (error, data) {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

router.route('/filter-blog/:text').get((req, res, next) => {
  blogSchema.find({
    $or: [{
      category: {
        '$regex': req.params.text,
      }
    },
    ]
  }, function (error, data) {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

router.route('/categories').get((req, res, next) => {
  blogSchema.distinct('category', function (error, data) {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  });
});

router.route('/search/:tag').get(async (req,res) => {  
  let datas = [];
  request(`https://www.webmd.com/search/search_results/default.aspx?query=${req.params.tag}`,(err,response,html) => {
    
   if(response.statusCode === 200){
      const $ = cheerio.load(html);

      $('.search-results-doc-container').each((i,el) => {
          const link = $(el).find('a').attr('href');
          const title = $(el).find('a').text();
          let data = {
                  link,
                  title      
          }      
          datas.push(data);      
      })  
   } 
  console.log(datas);   
  res.json(datas);

  })
})

module.exports = router;

