const mongoose = require('mongoose');
const Form = require('../Question/question')

mongoose.connect("mongodb://127.0.0.1:27017/form", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée'));

  const reponseSchema = mongoose.Schema({
    formId: { type: String }, 
    formTitle: String, // Titre du formulaire
    formDescription: String, // Description du formulaire
    answers: [
      {
        questionId: { type: String }, 
        questionTitle: String, // Titre de la question
        responseType: String, // Type de réponse (par exemple, "text", "radio", "checkbox", etc.)
        response: { type: mongoose.Schema.Types.Mixed } // Réponse à la question
      }
    ]
  });
  
  // Modèle de réponse
const Reponse = mongoose.model('reponses', reponseSchema);

module.exports = Reponse;

// const mongoose = require('mongoose');
// const Form = require('../Question/question')

// mongoose.connect("mongodb://127.0.0.1:27017/form", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log('Connexion à MongoDB réussie !'))
//   .catch(() => console.log('Connexion à MongoDB échouée'));

//   const reponseSchema = mongoose.Schema({
//     formId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form' }, 
//     formTitle: String, // Titre du formulaire
//     formDescription: String, // Description du formulaire
//     answers: [
//       {
//         questionId: { type: mongoose.Schema.Types.ObjectId }, 
//         questionTitle: String, // Titre de la question
//         responseType: String, // Type de réponse (par exemple, "text", "radio", "checkbox", etc.)
//         response: { type: mongoose.Schema.Types.Mixed } // Réponse à la question
//       }
//     ]
//   });
  
//   // Modèle de réponse
//   const Reponse = mongoose.model('reponses', reponseSchema);

// module.exports = Reponse;