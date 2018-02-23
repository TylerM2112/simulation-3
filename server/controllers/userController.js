module.exports = {
    getUser: (req, res) => {
    res.json({ user: req.session.user });
    },
    logoutUser: (req, res) => {
        req.session.destroy();
        res.status(200);
    }
}