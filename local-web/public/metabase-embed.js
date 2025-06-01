const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Serve static files from "public" directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Main route
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Company Dashboard</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background-color: #f0f2f5;
                    color: #333;
                }
                header {
                    background-color: #1e3a8a;
                    color: white;
                    padding: 20px 40px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .logo-title {
                    display: flex;
                    align-items: center;
                }
                .logo-title img {
                    max-width: 80px;
                    height: auto;
                    margin-right: 20px;
                }
                nav a {
                    color: white;
                    margin-left: 20px;
                    text-decoration: none;
                    font-weight: 500;
                }
                nav a:hover {
                    text-decoration: underline;
                }
                main {
                    padding: 40px;
                }
                h2 {
                    margin-bottom: 20px;
                    font-size: 24px;
                    color: #1e3a8a;
                }
                .iframe-container {
                    width: 100%;
                    height: 600px;
                    border: 1px solid #ccc;
                    background-color: white;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }
                iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                }
                footer {
                    text-align: center;
                    padding: 20px;
                    background-color: #1e3a8a;
                    color: white;
                    font-size: 14px;
                    margin-top: 40px;
                }
            </style>
        </head>
        <body>
            <header>
                <div class="logo-title">
                    <img src="https://lh6.googleusercontent.com/_7dn9EekCEtRqA5U19UQabwjj1hcRgaa82TBj3e4ReOECXeAchgDfxQLAomfP4KFUs9ALVtazfafko8-iS065qk=w16383" alt="Company Logo">
                    <h1>Business Intelligence Portal</h1>
                </div>
                <nav>
                    <a href="#dashboard">Dashboard</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
            <main>
                <h2>Embedded Metabase Report</h2>
                <div class="iframe-container">
                    <iframe
                        src="http://localhost:3000/public/dashboard/26c58a67-6c1a-409d-aeb3-e00569446f4c"
                        allowtransparency
                    ></iframe>
                </div>
            </main>
            <footer>
                &copy; ${new Date().getFullYear()} tunguyenn99. All rights reserved.
            </footer>
        </body>
        </html>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});