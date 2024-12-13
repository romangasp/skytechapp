
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const {getFirestore} = require('firebase-admin/firestore');
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
admin.initializeApp({
    credential: admin.credential.cert('./credentials.json'),
}
)

const db = getFirestore();
app.use(cors({ origin: true }));
app.options("*", cors());

app.get('/hello-world', (req,res) => {
    return res.status(200).json({message: 'Hello world'});
})

app.get('/', async (req,res) => {
    const querySnapshot = await db.collection('contacts').get();
    const contacts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    console.log(contacts);
    res.send('Hello')
});

app.post('/api/products',async (req,res) => {
    const { id, name, description} = req.body;

    res.send('new contact created');

    await db.collection('products').add({
        id,
        name,
        description
    })
    return res.status(204).json();
})

app.get("/api/products/:id", (req, res) => {
    (async ()=> {
        try {
            const doc = db.collection("products").doc(req.params.id).get()
            const item = await doc.get();

                    const response = item.data();
                    return res.status(200).json(response);
                } catch (error) {
                    return res.status(500).send(error);
                }
            })
          });

app.post("/api/sendEmail", async (req, res) => {
  try {
    const { name, phone, email, subject, message } = req.body;

    if (!name || !email || !message || !phone || !subject) {
      return res.status(400).send({ error: "Lack required data" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "roman.gasparini@gmail.com",
        pass: "vabg qycn uevf oqhh",
      },
    });

    const mailOptions = {
      from: "roman.gasparini@gmail.com",
      to: "roman.gasparini@gmail.com",
      subject: `${subject}`,
      text: `Nombre y Apellido: ${name}\nTeléfono: ${phone}\nCorreo: ${email}\nMensaje: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: "Email sent successfully" });
  } catch(error) {
    console.error("Error sending mail:", error);
    res.status(500).send({ error: "Internal server error" });
  }
});

exports.app = functions.https.onRequest(app);


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
