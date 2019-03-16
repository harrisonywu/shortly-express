const parseCookies = (req, res, next) => {
    var cookieString = req.headers.cookie;
    console.log('res.cookies :', res.cookies);
    
    if (cookieString) {
        var cookieArray = cookieString.split('; ');
        cookieArray.forEach((string) => {
            var keyValueArray = string.split('=');
            var keyName = keyValueArray[0];
            var valueName = keyValueArray[1];
            req.cookies[keyName] = valueName;
        })
    }
    // console.log(res.cookies);
    next();
    
};

module.exports = parseCookies;