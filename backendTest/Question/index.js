// const express = require('express');
// const cors = require('cors');
// const Form = require('./question'); 

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.post("/question", async (req, res) => {
//     console.log("hello")
//     const form = new Form(req.body);
//     try{
//         const savedForm = await form.save();
//         res.json(savedForm)
//     }catch (err){
//         console.log(err)
//         res.send(err)
//     }
// })



// app.listen(8000, () => {
//     console.log("Serveur à l'écoute..........");
// });


const express = require('express');
const cors = require('cors');
const Form = require('./question'); 

const app = express();

app.use(express.json());
app.use(cors());

app.post("/question", async (req, res) => {
    console.log("hello")
    console.log(req.body);
    const form = new Form(req.body);
    try{
        const savedForm = await form.save();
        res.json(savedForm)
    }catch (err){
        console.log(err)
        res.send(err)
    }
})

app.get("/forms", async (req, res) => {
    try {
        const forms = await Form.find();
        res.json(forms);
    } catch (err) {
        console.log(err);
        res.status(500).send('Erreur lors de la récupération des formulaires.');
    }
});


app.get("/forms/:formId", async (req, res) => {
    const { formId } = req.params;
    try {
        const form = await Form.findOne({formId});
        if (!form) {
            return res.status(404).send('Formulaire non trouvé');
        }
        res.json(form);
    } catch (err) {
        console.log(err);
        res.status(500).send('Erreur lors de la récupération du formulaire.');
    }
});


app.listen(8000, () => {
    console.log("Serveur à l'écoute..........");
});