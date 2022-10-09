const axios = require('axios')
const cheerio = require('cheerio')  
const fetch = (...args) =>
    import ('node-fetch').then(({ default: fetch }) => fetch(...args));


function fcdl(fileURL) {
return new Promise(async(resolve, reject) => {
        if (!/((http|https):\/\/)(www.)?filechan\.org\b([-a-zA-Z0-9@:%._\+~#?&//=]*)/.test(fileURL)) {
            fileURL = (await this.get(fileURL))['data']['file']['url']['full'];
        }
        const response = await fetch(fileURL);
        var data = await response.text();
        hasil = [];
        let url = await extractRawURL(data);
        let nama = await extractFileName(data);
        let size = await extractFileSize(data);
        hasil.push({ nama, url, size })
        resolve(hasil)
    }) /*End Promise*/
   } /*End Download File URL*/
    
    
    
    
   function extractRawURL(websiteData) {
        return websiteData.match(/https:\/\/cdn-[0-9]{3}.filechan.org\/[aA-zZ0-9]+\/[aA-zZ0-9]+-[aA-zZ0-9]+\/[^"]+/)[0];
    }

   function extractFileName(websiteData) {
        return websiteData.match(/text-center text-wordwrap">[^<]+/)[0].replace('text-center text-wordwrap">', '');
    }
    
    function extractFileSize(websiteData) {
        return websiteData.match(/\(\d+.*\)/)[0];
    }

    


module.exports = { fcdl }
