require('dotenv').config();

const config = {
	env: process.env.NODE_ENV || 'dev',
	host: process.env.HOST || 'http://localhost',
	port: process.env.PORT || 3000,
	dbUser: process.env.DB_USER,
	dbPassword: process.env.DB_PASSWORD,
	dbHost: process.env.DB_HOST,
	dbName: process.env.DB_NAME,
};

module.exports = { config };
