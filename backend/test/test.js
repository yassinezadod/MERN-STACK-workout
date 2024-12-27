const mongoose = require('mongoose');

// Remplace par l'URI de ta base de données MongoDB
const mongoURI = 'mongodb://127.0.0.1:27017/MERNapp';  // Ici, MERNapp est le nom de la base de données

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connexion réussie à MongoDB');
  })
  .catch((err) => {
    console.error('Erreur de connexion à MongoDB:', err);
  });
