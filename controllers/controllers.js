const saySomething = (req, res, next) => {
    res.status(200).json({
        body: 'Hello from backend api!'
    });
};

module.exports.saySomething = saySomething;