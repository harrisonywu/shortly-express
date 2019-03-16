const parseCookies = (req, res, next) => {
    console.log('cookies', req.headers.cookie)
};

module.exports = parseCookies;