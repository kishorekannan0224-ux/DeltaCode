# DeltaCode — Official Company Website

A responsive React + Vite frontend with a Node.js + Express contact API.

## Requirements
- Node.js 20 or newer
- VS Code
- Internet connection for Google Fonts and npm packages

## 1. Open the project
Extract the ZIP. In VS Code choose **File → Open Folder** and select `DeltaCode`.

## Add your actual DeltaCode logo

The navbar and footer use this image path:
`client/public/images/deltacode-logo.jpg.png`

Create the `images` folder inside `client/public` and copy your existing company logo file there, keeping the exact filename. Vite serves files in `public` from the site root, so the logo will appear in the navbar and footer.

## 2. Start the backend
Open a terminal in VS Code:

```bash
cd server
npm install
```

Create a file named `.env` inside `server` by copying `.env.example`.
Then run:

```bash
npm run dev
```

The API runs at `http://localhost:5000`.
Check `http://localhost:5000/api/health` in your browser. It should return a JSON status.

## 3. Start the frontend
Open a second terminal in VS Code:

```bash
cd client
npm install
npm run dev
```

Open the local URL Vite prints, usually `http://localhost:5173`.

## 4. Test the contact form
Fill in the contact form and submit it. Successful enquiries are saved to:
`server/data/enquiries.json`

This JSON-file storage is suitable only for local development or a small demo. For a public production website, use a managed database such as PostgreSQL or MongoDB, add authenticated admin access, configure a real email provider, and set environment variables in your hosting provider.

## 5. Before publishing
- Replace `hello@deltacode.in` with an email address you control.
- Replace the social links with DeltaCode's official profiles.
- Update project descriptions to match work actually completed.
- Set `VITE_API_URL` to your deployed API URL when hosting the frontend.
- Set `CLIENT_ORIGIN` to your deployed frontend URL on the backend.
- Never commit `.env` or private credentials to GitHub.

## Scripts
Frontend: `npm run dev`, `npm run build`, `npm run preview`
Backend: `npm run dev`, `npm start`
