
module.exports = function(req, res, next) {
    if(!req.user.isAdmin) return res.statuse(403).send('Access denied');
    next();
}