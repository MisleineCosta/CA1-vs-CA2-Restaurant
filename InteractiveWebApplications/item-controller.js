exports.getWorld = function(req,res){
    res.json({result: 'Hello Mikhailfrom Controller'});
}

exports.getWorldParams = function(req,res){
    res.json({message: 'I am BScBest!', data: [
        req.params.foo,
        req.params.bar
    ]});
};

exports.postWorld = function(req,res){
    res.json({result: 'Post was sent', data: req.body});
};