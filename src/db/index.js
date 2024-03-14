const { MongoClient, ServerApiVersion } = require('mongodb');

let client;

const getClient = () => {
	if (!client) {
		client = new MongoClient(process.env.MONGO_URI, {
			serverApi: {
				version: ServerApiVersion.v1,
				strict: true,
				deprecationErrors: true,
			}
		});
	}

	return client;
};

const getCollection = (name) => {
	return getClient().db('hamster-wars-v1').collection(name);
};

exports.hamstersCollection = getCollection('hamsters');
