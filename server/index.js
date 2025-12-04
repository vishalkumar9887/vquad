import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Mock database (JSON file) for demonstration if Firebase is not configured
const DB_FILE = path.join(__dirname, 'submissions.json');

if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([]));
}

// Helper to read/write DB
const getSubmissions = () => {
    try {
        return JSON.parse(fs.readFileSync(DB_FILE));
    } catch (e) {
        return [];
    }
};

const saveSubmission = (submission) => {
    const submissions = getSubmissions();
    submissions.push(submission);
    fs.writeFileSync(DB_FILE, JSON.stringify(submissions, null, 2));
};

// Contact Endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, company, service, message, consent, source } = req.body;

        if (!name || !email || !message || !consent) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const submission = {
            id: Date.now().toString(),
            name,
            email,
            company,
            service,
            message,
            consent,
            source,
            timestamp: new Date().toISOString(),
            ip: req.ip
        };

        // 1. Store submission
        // TODO: Integrate Firebase Firestore here using admin SDK if credentials provided
        saveSubmission(submission);

        // 2. Send Email
        if (process.env.CONTACT_EMAIL && process.env.EMAIL_PASS) {
            const transporter = nodemailer.createTransport({
                service: 'gmail', // or use host/port from env
                auth: {
                    user: process.env.CONTACT_EMAIL,
                    pass: process.env.EMAIL_PASS
                }
            });

            const mailOptions = {
                from: process.env.CONTACT_EMAIL,
                to: process.env.CONTACT_EMAIL,
                subject: `New Contact Form Submission from ${name}`,
                text: `
          Name: ${name}
          Email: ${email}
          Company: ${company}
          Service: ${service}
          Message: ${message}
        `
            };

            await transporter.sendMail(mailOptions);
        } else {
            console.log('Email not sent (credentials missing). Submission stored locally.');
        }

        res.status(200).json({ success: true, message: 'Submission received' });
    } catch (error) {
        console.error('Error processing submission:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Admin Endpoint to get submissions
app.get('/api/submissions', (req, res) => {
    const token = req.headers['authorization'];
    if (token !== `Bearer ${process.env.ADMIN_TOKEN || 'admin123'}`) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    res.json(getSubmissions());
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
