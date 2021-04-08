exports.getWorld = function (req, res) {
    res.json({ result: 'Greeting you from Controller' });
}
exports.getWorldParams = function (req, res) {
    res.json({
        message: ' Hey you!', data: [
            req.params.foo,
            req.params.bar
        ]
    })
};
exports.postWorld = function (req, res) {
    res.json({ result: 'Post was sent', data: req.body })
};