const { Datastore } = require('@google-cloud/datastore');

const datastore = new Datastore({
    projectId: process.env.PROJECT_ID
});

const retrieveDataById = async id => {
    const query = datastore.createQuery('url').filter('id', '=', id);

    const [[value]] = await datastore.runQuery(query);

    return value;
};

module.exports = {
    retrieveDataById
};
