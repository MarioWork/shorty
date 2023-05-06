const { Datastore } = require('@google-cloud/datastore');

const datastore = new Datastore({
    projectId: process.env.PROJECT_ID
});

module.exports = async (req, res) => {
    const query = datastore.createQuery('Test');

    const [test] = await datastore.runQuery(query);
    res.send(test);
};
