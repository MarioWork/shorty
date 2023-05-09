const { Datastore } = require('@google-cloud/datastore');

const datastore = new Datastore({
    projectId: process.env.PROJECT_ID
});

module.exports = async (req, res) => {
    const id = req.params.id;

    const query = datastore.createQuery('url').filter('id', '=', id);

    const [[value]] = await datastore.runQuery(query);

    if (!value?.url) res.status(404).send();

    res.redirect(301, value.url);
};
