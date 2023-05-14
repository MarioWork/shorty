const { writeData } = require('../utils/db');

const urlRegex = /^(https?){1}:\/\/[^\s/$.?#].[^\s]*$/;

module.exports = async (req, res) => {
    const { url } = req.body;

    if (!isValidUrl(url)) {
        return res.status(403).send('Invalid URL format');
    }

    try {
        const data = await writeData({ url });
        return res.send(data);
    } catch (error) {
        return res.status(404);
    }
};

const isValidUrl = url => urlRegex.test(url);
