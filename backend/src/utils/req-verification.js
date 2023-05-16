module.exports = (req, httpVerbAllowed) => {
    const { method, headers } = req;
    const { api_key, host } = headers;

    if (host !== process.env.DEV_DOMAIN && host !== process.env.PROD_DOMAIN) return false;
    if (method != httpVerbAllowed) return false;

    return api_key === process.env.API_KEY;
};
