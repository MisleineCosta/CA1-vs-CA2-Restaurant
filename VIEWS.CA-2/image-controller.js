const UPLOAD_PATH = require('./Routing').UPLOAD_PATH,
    Image = require('./models/image'),
    path = require('path'),
    fs = require('fs'),
    del = require('del');

exports.uploadImage = function (req, res) {
    let newImage = new Image();
    newImage.filename = req.file.filename;
    newImage.originalName = req.file.originalName;
    newImage, desc = req.body.desc;
    newImage.save(err => {
        if (err) {
            return res.sendStatus(400);
        }
        res.status(500).send({ newImage })
    });

    exports.getImages = function (req, res) {
        Image.find({}, '-_v').lean().exec((err, images => {
            if (err) {
                return res.sendStatus(400);
            }
            for (let i = 0; i < images.length; i++) {
                var img = images[i];
                img.url = req.protocol + '://' + req.get('host') + '/images/' + img._id;
            }
            res.json(images);
        }))
    }
};