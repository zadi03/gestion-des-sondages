// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const ConnexionShema = new mongoose.Schema({
//     email : String,
//     password : String
// })

// const Connexion = mongoose.model("administrateurs", ConnexionShema)


// // Define the schema for the questions
// const questionSchema = new Schema({
//     titreQuestion: String,
//     typeQuestion: String,
//     choix: [String], // Assuming choices are strings
//     questionParagraphe: String
// });

// // Define the schema for the entire form
// const formSchema = new Schema({
//     titreForm: String,
//     descriptionForm: String,
//     questionsForm: [questionSchema] // Array of question objects
// });

// // Create a model using the form schema
// const Form = mongoose.model('Form', formSchema);

// module.exports = {Form, Connexion};



// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const ConnexionShema = new mongoose.Schema({
//     email : String,
//     password : String
// })

// const Connexion = mongoose.model("administrateurs", ConnexionShema)


// // Define the schema for the questions
// const questionSchema = new Schema({
//     titreQuestion: String,
//     typeQuestion: String,
//     choix: [String], // Assuming choices are strings
//     questionParagraphe: String
// });

// // Define the schema for the entire form
// const formSchema = new Schema({
//     titreForm: String,
//     descriptionForm: String,
//     questionsForm: [questionSchema] // Array of question objects
// });

// // Create a model using the form schema
// const Form = mongoose.model('Form', formSchema);

// module.exports = {Form, Connexion};


const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/form",
    {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à mongoDB échouée'))

const ConnexionShema = mongoose.Schema({
    email : String,
    password : String
})

const Connexion = mongoose.model("administrateurs", ConnexionShema)
module.exports = Connexion;



