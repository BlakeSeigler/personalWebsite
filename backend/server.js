import express from "express"
import path from "path"
import { fileURLToPath } from 'url';

const app = express()

// Defining variables I can use similar to cjs files but for ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Serve the static files from the React app's build directory
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Handle any requests that don't match static files, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
