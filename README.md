# V-Quad Innovations

Modern portfolio/agency website for V-Quad Innovations.

## Tech Stack

- **Frontend**: React (Vite), TailwindCSS, Framer Motion
- **Backend**: Node.js, Express
- **Database**: Local JSON (dev) / Firebase Firestore (prod - configurable)
- **Email**: Nodemailer (Gmail/SendGrid)

## Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```env
   CONTACT_EMAIL=your-email@example.com
   EMAIL_PASS=your-email-password-or-app-password
   ADMIN_TOKEN=admin123
   PORT=3001
   ```
4. Start the development server (runs both frontend and backend):
   ```bash
   npm run dev
   ```
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3001

## Deployment

### Vercel (Frontend)

1. Push to GitHub.
2. Import project in Vercel.
3. Set build command: `npm run build`.
4. Set output directory: `dist`.
5. Deploy.

### Render (Backend)

1. Create a new Web Service in Render.
2. Connect GitHub repo.
3. Set build command: `npm install`.
4. Set start command: `npm run server`.
5. Add environment variables (`CONTACT_EMAIL`, `EMAIL_PASS`, `ADMIN_TOKEN`).
6. Update frontend API URL in `src/components/Contact.jsx` and `src/components/Admin.jsx` to point to the Render URL instead of `localhost:3001`.

## Admin Panel

Access `/admin` to view contact form submissions.
Default token: `admin123` (or whatever you set in `.env`).
