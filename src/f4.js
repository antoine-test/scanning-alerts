function (req, res) {
    json = JSON.stringify({ "data": req.query.input });
    res.send(json);
};

