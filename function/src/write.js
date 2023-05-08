const { Datastore } = require('@google-cloud/datastore');
const crypto = require('crypto');

const datastore = new Datastore({
    projectId: process.env.PROJECT_ID
});

module.exports = async (req, res) => {
    const { link } = req.body;
    //TODO: VALIDATE LINK
    const id = crypto.randomBytes(8).toString('hex');

    const key = datastore.key('link');

    const data = { id, link };

    const entity = { key, data };

    await datastore.upsert(entity);

    res.send(data);
};
