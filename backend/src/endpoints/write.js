const { writeData } = require('../utils/db');
const isValidUrl = require('../utils/verify-url');

module.exports = async (req, res) => {
    const { url } = req.body;

    if (!isValidUrl(url)) return res.status(403).send('Invalid URL format');

    try {
        const data = await writeData({ url });
        return res.send(data);
    } catch (error) {
        return res.status(404);
    }
};
