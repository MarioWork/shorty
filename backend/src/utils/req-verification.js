module.exports = req => {
    const { api_key } = req.headers;
    return api_key === process.env.API_KEY;
};
