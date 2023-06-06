const httpVerbs = require('../enums/http-verbs');

module.exports = ({ req, res, httpVerbAllowed }) => {
    if (!req.headers?.origin) res.status(403).send('Missing origin header');

    if (process.env.ENV === 'DEV') res.set('Access-Control-Allow-Origin', 'http://localhost:3000');

    if (req.method === httpVerbs.OPTIONS) {
        res.set('Access-Control-Allow-Methods', httpVerbAllowed);
        res.set('Access-Control-Allow-Headers', 'Content-Type, api_key, origin');
        res.set('Access-Control-Max-Age', '3600');
        res.status(204).send();
        return;
    }

    const { method, headers } = req;
    const { api_key } = headers;

    if (method != httpVerbAllowed) res.status(405).send({ message: 'HTTP Method not allowed' });

    if (
        (method === httpVerbs.GET && api_key !== process.env.RETRIEVE_API_KEY) ||
        (method === httpVerbs.POST && api_key !== process.env.CREATE_API_KEY)
    )
        res.status(403).send({ message: 'Unauthorized' });
};
