module.exports = {
    port: process.env.PORT || 4040,
    db: process.env.MONGO_URI || 'mongodb://localhost:27017/testDb',
    fbToken: process.env.FB_TOKEN || 'no_token',
    appSecret: process.env.APP_SECRET || 'no_secret'
};