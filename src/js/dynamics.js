// function setDyanmicContent() {
//   const div = document.getElementById('count');

//   dynamicContent.innerHTML = 'This is dynamic content';
// }

// Set the date we're counting down to
function startCountdown() {
    const targetDate = new Date("Dec 31, 2023 00:00:00").getTime();
    const countdownElement = document.getElementById("countdown");

    setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        if (distance <= 0) {
            countdownElement.textContent = "Time's up!";
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}
window.onload = startCountdown;


import express from "express";
import { google } from "googleapis";
const app = express();

// Replace with your client ID/secret and redirect URIs
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
    "YOUR_CLIENT_ID",
    "YOUR_CLIENT_SECRET",
    "http://localhost:3000/oauth2callback"
);

// Send an email using Gmail API
app.get("/send-email", async (req, res) => {
    try {
        // Access token must be obtained after user auth.
        oauth2Client.setCredentials({
            access_token: "YOUR_ACCESS_TOKEN",
            refresh_token: "YOUR_REFRESH_TOKEN"
        });

        const gmail = google.gmail({ version: "v1", auth: oauth2Client });
        const rawMessage = Buffer.from(
            "From: me\r\n" +
            "To: recipient@example.com\r\n" +
            "Subject: Something Nice\r\n\r\n" +
            "Hello, just saying something nice!"
        ).toString("base64").replace(/\+/g, "-").replace(/\//g, "_");

        await gmail.users.messages.send({
            userId: "me",
            requestBody: { raw: rawMessage }
        });
        res.send("Email sent!");
    } catch (error) {
        res.status(500).send("Error: " + error);
    }
});



app.listen(3000, () => console.log("Server started on http://localhost:3000"));

unsafe - eval();
