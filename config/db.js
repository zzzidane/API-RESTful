const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connecté à MongoDB');
  } catch (err) {
    console.error('Erreur de connexion :', err);
    process.exit(1);
  }
};

module.exports = connectDB;