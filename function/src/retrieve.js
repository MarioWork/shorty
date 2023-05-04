const { Datastore } = require('@google-cloud/datastore');

const datastore = new Datastore();

module.exports = async (req, res) => {
    const query = datastore.createQuery('Task');

    const [tasks] = await datastore.runQuery(query);
    res.send(tasks);
};
