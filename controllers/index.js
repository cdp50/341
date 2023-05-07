const awesome = (req, res, next) => {
    res.json('Claudio Parra');
};

const superAwesome = (req, res, next) => {
    res.json('Fran Parra');
};



module.exports = {awesome, superAwesome}