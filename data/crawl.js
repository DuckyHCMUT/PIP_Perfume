var request = require('request');
var cheerio = require('cheerio');

var fs = require('fs');
const { find } = require('cheerio/lib/api/traversing');
writer = fs.createWriteStream('male.csv');
writer.write(`ID,Gender,Brand,Name,Image,Price range,Rating,Option,Price\n`);
var id = 9999999;
for (let i = 1; i <= 10; i += 1){
        request('https://namperfume.net/collections/nuoc-hoa-nu?page='+String(i),
                (error, response, html) => {
                    if (!error && response.statusCode == 200) {
                        var $ = cheerio.load(html);
                        // console.log($.html());
                        var gender = 'Male';
                        $('.pro-loop').map((i,item) => {
                            var e = $(item).children().children().find('.box-pro-detail');
                            
                            var brand = $(e).find('.pro-vendor').text();
                            brand = brand.replace(/(\n\t\t\t|\n\t\t\t\t|\t)/gm,"");
                            
                            var name = $(e).find('.pro-name').text();
                            name = name.replace(/(\n\t\t\t\t\n\t\t\t\t\t|\n\t\t\t\t\n\t\t\t|,)/gm,"");
                            
                            var price = $(e).find('.box-pro-prices').text();
                            price = price.replace(/(\t\n\t\t\t\t\n\t\t\t\t|\n\t\t\t\t\n\t\t\t)/gm,"");
                            price = price.replace(/(,)/gm,".");

                            var img = $(item).children().children().children('a').children('img').attr('src');

                            var url= $(e).find('.pro-name').children('a').attr('href');
                            second(url, gender, brand, name, img, price);
                        })
                    }
                }
        );
        var second = function(url, gender, brand, name, img, price){
            request('https://namperfume.net'+url,
                (error, response, html) => {
                    if (!error && response.statusCode == 200) {
                        var $ = cheerio.load(html);
                        // console.log($.html());
                        var rating = $('.starbap-rev-widg__summary-text').text();
                        rating = rating.split(' ')[2];
                        $('.product-variant-item').map((i,item) => {
                            id += 1;
                            var opt = $(item).find('.product-variant-item__title').text();
                            opt = opt.replace(/(\n                    |\n        | \n    | \n                |            |\n    )/gm,"");
                            var size = opt.split(' ');
                            size = size.slice(-1)[0];
                            if (size !== 'Tester'){
                                var price_precise = $(item).find('.product-variant-item__price').text();
                                price_precise = price_precise.replace(/(\n                    |\n                |\n        |\n                )/gm,"");
                                price_precise = price_precise.replace(/(,)/gm,".");
                                writer.write(`${id},${gender},${brand},${name},${img},${price},${rating},${opt},${price_precise}\n`);
                            }  
                        });
                    };
                }
            );
        }
}   
// var json = JSON.stringify(data);
// fs.writeFile(Args[k]+'.json', json, 'utf8', function(err) {
//     if (err) console.log('error', err);
// });