const verifyRequest = require('../utils/req-verification');
const httpVerbs = require('../enums/http-verbs');
const { retrieveDataById } = require('../utils/db');

module.exports = async (req, res) => {
    if (!verifyRequest({ req, httpVerbAllowed: httpVerbs.GET }))
        return res.status(403).send({ message: 'Unauthorized' });

    const id = req.query?.id;

    if (!id) return res.status(404).send();

    const data = await retrieveDataById(id);

    if (!data?.url) return res.status(404).send();

    return res.send({ id: data.id, url: data.url });
};
