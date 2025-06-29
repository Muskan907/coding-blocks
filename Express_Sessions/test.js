const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://muskanpatni67:LKheG8yM7vA.rHP@cluster0.0krou.mongodb.net/test-app?retryWrites=true&w=majority';

async function run() {
    const client = new MongoClient(uri, {
        serverSelectionTimeoutMS: 5000, // Wait max 5 seconds
        ssl: true
    });
    try {
        await client.connect();
        console.log('✅ Connected Successfully to MongoDB Atlas');
    } catch (err) {
        console.error('❌ Connection Failed:', err);
    } finally {
        await client.close();
    }
}

run();
