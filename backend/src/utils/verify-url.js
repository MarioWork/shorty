const urlRegex = /^(https?){1}:\/\/[^\s/$.?#].[^\s]*$/;

module.exports = url => urlRegex.test(url);
