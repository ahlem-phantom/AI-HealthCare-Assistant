request = require('request'),
cheerio = require('cheerio'),
  express = require('express'),
  router = express.Router();



  router.route('/depression').get(async (req,res) => {  
    let datas = [];
    request(`https://www.webmd.com/search/search_results/default.aspx?query=depression`,(err,response,html) => {
      
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

