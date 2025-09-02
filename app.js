const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname)); // Serves files from the current directory

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
