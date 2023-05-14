const to = require('await-to-js').default;
const { writeData } = require('../utils/db');
const isValidUrl = require('../utils/verify-url');
const verifyRequest = require('../utils/req-verification');

module.exports = async (req, res) => {
    if (!verifyRequest(req)) return res.status(403).send({ message: 'Unauthorized' });

    const { url } = req.body;

    if (!isValidUrl(url)) return res.status(403).send('Invalid URL format');

    const [error, data] = await to(writeData({ url }));

    if (error) {
        res.status(500).send();
        throw error;
    }

    return res.send(data);
};
