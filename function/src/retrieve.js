const { Datastore } = require('@google-cloud/datastore');

const datastore = new Datastore({
    projectId: process.env.PROJECT_ID
});

module.exports = async (req, res) => {
    const id = req.params.id;
    const query = datastore.createQuery('link').filter('id', '=', id);
    const [[{ link }]] = await datastore.runQuery(query);
    res.redirect(link);
};
