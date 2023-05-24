module.exports = ({ req, res, httpVerbAllowed }) => {
    const { method, headers } = req;
    const { api_key } = headers;

    if (method != httpVerbAllowed) res.status(405).send({ message: 'HTTP Method not allowed' });

    if (api_key !== process.env.API_KEY) res.status(403).send({ message: 'Unauthorized' });
};
