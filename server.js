#!/usr/bin/env node

const express = require('express');
const path = require("path");

const router = express.Router();
const app = express();
const port = 3030;

app.use(express.static(path.join(__dirname, './build'), {dotfiles: 'allow'}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.use('/', router);
