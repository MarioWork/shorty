const httpVerbs = require('../enums/http-verbs');

module.exports = ({ req, res, httpVerbAllowed }) => {
    res.set('Access-Control-Allow-Origin', '*');

    if (req.method === httpVerbs.OPTIONS) {
        res.set('Access-Control-Allow-Methods', httpVerbAllowed);
        res.set('Access-Control-Allow-Headers', 'Content-Type');
        res.set('Access-Control-Max-Age', '3600');
        res.status(204).send('');
        return;
    }

    const { method, headers } = req;
    const { api_key } = headers;

    if (method != httpVerbAllowed) res.status(405).send({ message: 'HTTP Method not allowed' });

    if (api_key !== process.env.API_KEY) res.status(403).send({ message: 'Unauthorized' });
};
