/**
 * Mon apprentissage GitHub Copilot - Step 4
 * Exercice: Générer du code à partir de commentaires
 */

// Create web server
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from my GitHub Copilot learning project!");
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
