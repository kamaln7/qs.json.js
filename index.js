module.exports = (req, res) => JSON.stringify(require('url').parse(req.url, true).query)
