var db = require('../config/db.config');

randomNumberGenerator = () => {
    const max = 1000000;
    const min = 1;
    const result = Math.random()*(max - min) + min;
    return Math.floor(result);
}

exports.urlGenerator = (type) => {
    let data = randomNumberGenerator().toString();
    let url = Buffer.from(data).toString('base64');
        while(urlValidator(url,type)){
            data = randomNumberGenerator().toString();
            url = Buffer.from(data).toString('base64');
        }
    return url;
}

urlValidator = (url, type) => {
    let getUrls;
    
    if(type=='movie'){
        getUrls = `SELECT \`URL\` FROM \`mediatime-db\`.\`Movies\`;`
    }
    else if (type=='show'){
        getUrls = `SELECT \`URL\` FROM \`mediatime-db\`.\`Shows\`;`
    }

    db.query(getUrls, (err,data,fields) => {
        if(err){
            console.error(err.message);
        }
        return data.some( obj => obj.URL === url);
    });

}