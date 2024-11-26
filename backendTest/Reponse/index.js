const express = require('express');
const cors = require('cors');
const Reponse = require('./reponse'); 
const Form = require('../Question/question');


const app = express();

app.use(express.json());
app.use(cors());


app.post('/Reponse', async (req, res) => {
  try {
      const { formId, formTitle, formDescription, answers } = req.body;

      // Créez un nouvel objet de réponse en utilisant le schéma
      const newResponse = new Reponse({
          formId: formId,
          formTitle: formTitle,
          formDescription: formDescription,
          answers: answers
      });

      // Enregistrez le nouvel objet de réponse dans la base de données
      const savedResponse = await newResponse.save();

      // Répondez avec le nouvel objet de réponse enregistré
      res.status(201).json(savedResponse);
  } catch (err) {
      // Gestion des erreurs
      console.error('Erreur lors de l\'enregistrement de la réponse :', err);
      res.status(500).send('Erreur lors de l\'enregistrement de la réponse.');
  }
});

app.get('/stats/:formId', async (req, res) => {
    try {
      const formId = req.params.formId;
      const responses = await Reponse.find({ formId });
  
      // Map pour stocker les statistiques
      const stats = {
        formId: formId,  // Ajout de l'ID du formulaire
        questions: {}
      };
  
      responses.forEach(responseDoc => {
        responseDoc.answers.forEach(answer => {
          const questionId = answer.questionId;
  
          if (!stats.questions[questionId]) {
            stats.questions[questionId] = {
              questionId: questionId,
              questionTitle: answer.questionTitle,
              responseType: answer.responseType,
              count: 0,
              responses: {}
            };
          }
  
          stats.questions[questionId].count += 1;
          const answerValue = answer.response;
  
          if (stats.questions[questionId].responseType === 'checkbox') {
            answerValue.forEach(value => {
              stats.questions[questionId].responses[value] = (stats.questions[questionId].responses[value] || 0) + 1;
            });
          } else {
            stats.questions[questionId].responses[answerValue] = (stats.questions[questionId].responses[answerValue] || 0) + 1;
          }
        });
      });
  
      res.json(stats);
    } catch (err) {
      console.log(err);
      res.status(500).send('Erreur lors de la récupération des statistiques.');
    }
  });







app.listen(5000, () => {
    console.log("Serveur à l'écoute..........");
});
