/*
  Ce fichier contient les variables de configuration
  reliées à Firebase et ses produits.
*/

// Configuration Firebase (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyDBkHd3rUW8dZ5D07SUpNkPG7yMxRuWbdM",
  authDomain: "panier-achat-lt.firebaseapp.com",
  databaseURL: "https://panier-achat-lt-default-rtdb.firebaseio.com",
  projectId: "panier-achat-lt",
  storageBucket: "panier-achat-lt.appspot.com",
  messagingSenderId: "531000313975",
  appId: "1:531000313975:web:b29c2de23e52c9b8791e72",
  measurementId: "G-KLNJ2561WS" 
};
export default firebaseConfig;

// Nom de la collection principale
export const utilRef = "utilisateurs-ex5";
// Nom de la sous-collection
export const dossRef = "dossiers";