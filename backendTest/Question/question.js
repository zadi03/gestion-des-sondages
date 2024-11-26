// const mongoose = require('mongoose');
// mongoose.connect("mongodb://127.0.0.1:27017/form",
//     {
//         useNewUrlParser : true,
//         useUnifiedTopology : true
//     })
//     .then(() => console.log('Connexion à MongoDB réussie !'))
//     .catch(() => console.log('Connexion à mongoDB échouée'))

// // Define the schema for the questions
// const questionSchema = mongoose.Schema({
//     titreQuestion: String,
//     typeQuestion: String,
//     choix: [String], // Assuming choices are strings
//     questionParagraphe: String
// });

// // Define the schema for the entire form
// const formSchema = mongoose.Schema({
//     titreForm: String,
//     descriptionForm: String,
//     questionsForm: [questionSchema] // Array of question objects
// });

// // Create a model using the form schema
// const Form = mongoose.model('Form', formSchema);

// module.exports = Form


// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// mongoose.connect("mongodb://127.0.0.1:27017/form", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log('Connexion à MongoDB réussie !'))
//   .catch(() => console.log('Connexion à MongoDB échouée'));

// // Importez le module mongoose.Types.ObjectId
// const { ObjectId } = mongoose.Types;

// // Define the schema for the questions
// const questionSchema = Schema({
//     _id: { type: ObjectId, auto: true },
//     titreQuestion: String,
//     typeQuestion: String,
//     choix: [String],
//     questionParagraphe: String
// });

// // Define the schema for the entire form
// const formSchema = Schema({
//     _id: { type: ObjectId, auto: true },
//     titreForm: String,
//     descriptionForm: String,
//     questionsForm: [questionSchema]
// });

// // Create a model using the form schema
// const Form = mongoose.model('Form', formSchema);

// module.exports = Form;


const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect("mongodb://127.0.0.1:27017/form", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée'));


// Define the schema for the questions
const questionSchema = Schema({
    questionId: { type: String, required: true },
    titreQuestion: String,
    typeQuestion: String,
    choix: [String],
    questionParagraphe: String
});

// Define the schema for the entire form
const formSchema = Schema({
    formId: { type: String, required: true },
    titreForm: String,
    descriptionForm: String,
    questionsForm: [questionSchema]
});

// Create a model using the form schema
const Form = mongoose.model('Form', formSchema);

module.exports = Form;
