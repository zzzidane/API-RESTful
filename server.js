require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Connexion à la base de données
connectDB();

// Routes
app.use('/users', userRoutes);

// Route de test
app.get('/', (req, res) => {
  res.send(' API est en cours .....');
});

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});