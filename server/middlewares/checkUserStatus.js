module.exports = function checkUserStatus(req, res, next) {
    if (req.session.user) {
      next();
    } else {
      res.status(403).json({ message: 'TURN BACK NOW! UNAUTHORIZED!' });
    }
  }