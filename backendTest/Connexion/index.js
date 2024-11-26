// const express = require('express')
// const app = express();
// const cors = require('cors')
// const Connexion = require('./module');

// app.use(express.json());
// app.use(cors())

// app.post('/login', async(req, res) =>{
//     const {email, password} = req.body;
//     if (!email || !password) {
//         return res.status(400).json({ message: 'Veuillez remplir les champs' });
//     }
//     Connexion.findOne({ email : email }).then(e => {
//         if(!e){
//             return res.status(401).json({message : 'Utilisateur introuvable'});
//         }else {
//                 if(password !== e.password){
//                     return res.status(401).json({message : 'Mot de passe incorrect'})
//                 }else {
//                     return res.status(200).json({message : 'Connexion réussie'})
//                 }
//         }
        
//     }).catch(err => {
//         console.error('Erreur de base de données:', err);
//         return res.status(500).json({ message: 'Erreur serveur' });
//     });
// })


// app.listen(9000, () => {
//     console.log("Serveur à l'écoute..........")
// });

const express = require('express');
const app = express();
const cors = require('cors');
const Connexion = require('./module'); 
app.use(express.json());
app.use(cors());

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Veuillez remplir les champs' });
    }
    try {
        const user = await Connexion.findOne({ email: email });
        if (!user) {
            return res.status(401).json({ message: 'Utilisateur introuvable', field: 'email' }); // 401 Unauthorized pour utilisateur introuvable
        } else {
            if (password !== user.password) {
                return res.status(401).json({ message: 'Mot de passe incorrect', field: 'password' }); // 401 Unauthorized pour mot de passe incorrect
            } else {
                return res.status(200).json({ message: 'Connexion réussie' }); // 200 OK pour une connexion réussie
            }
        }
    } catch (err) {
        console.error('Erreur de base de données:', err);
        return res.status(500).json({ message: 'Erreur serveur' }); // 500 Internal Server Error pour une erreur serveur
    }
});

app.listen(9000, () => {
    console.log("Serveur à l'écoute..........");
});
