const { Datastore } = require('@google-cloud/datastore');
const crypto = require('crypto');

const urlRegex = /^(https?){1}:\/\/[^\s/$.?#].[^\s]*$/;

const datastore = new Datastore({
    projectId: process.env.PROJECT_ID
});

module.exports = async (req, res) => {
    const { url } = req.body;

    if (!isValidUrl(url)) res.status(403).send('Invalid URL format');

    const id = crypto.randomBytes(8).toString('hex');

    const key = datastore.key('url');

    const data = { id, url };

    const entity = { key, data };

    await datastore.upsert(entity);

    res.send(data);
};

const isValidUrl = url => urlRegex.test(url);
