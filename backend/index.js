import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import hbs from 'nodemailer-express-handlebars';

const app = express();
const port = process.env.port || 5000;

dotenv.config();

const hbsOptions = {
    viewEngine: {
        defaultLayout: false
    },
    viewPath: 'views'
};

const transporter = nodemailer.createTransport({
  port: 587,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  secure: false,
  tls: {
    rejectUnauthorized: false,
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
transporter.use("compile", hbs(hbsOptions));

app.post('/api/send-contact', (req, res) => {
    const { name, surname, job, date, hour, phone } = req.body;

    if (!name || !surname || !job || !date || !hour || !phone) {
        return res.status(400).json({ error: 'Tutti i campi sono richiesti' });
    }

    const mailData = {
      from: "Da sito web <francescomerighi61@gmail.com>",
      to: "francescomerighi61@gmail.com",
      subject: `${name} ${surname} ha pianificato una chiamata con te!`,
      template: 'email-template',
      context: {
        name,
        surname,
        job,
        date,
        hour,
        phone
      }
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return res.status(500).json({ error: 'Errore durante l\'invio dei dati' });
        }

        return res.status(200).json({ message: 'Email inviata con successo' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});