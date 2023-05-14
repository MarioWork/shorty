const { Datastore } = require('@google-cloud/datastore');
const crypto = require('crypto');

const KEY = 'url';

const datastore = new Datastore({
    projectId: process.env.PROJECT_ID
});

const retrieveDataById = async id => {
    const query = datastore.createQuery('url').filter('id', '=', id);

    const [[value]] = await datastore.runQuery(query);

    return value;
};

const writeData = async ({ url }) => {
    const id = crypto.randomBytes(8).toString('hex');

    const key = datastore.key(KEY);

    const data = { id, url };

    const entity = { key, data };

    await datastore.upsert(entity);

    return data;
};

module.exports = {
    retrieveDataById,
    writeData
};
