// const express = require("express");
// const router = express.Router();
// const { Connexion } = require("../module/module");

// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await Connexion.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ message: 'Utilisateur introuvable' });
//         }
//         if (user.password !== password) {
//             return res.status(400).json({ message: 'Mot de passe incorrect' });
//         }
//         return res.status(200).json({ message: 'Connexion réussie' });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: 'Erreur serveur' });
//     }
// });

// module.exports = router;
