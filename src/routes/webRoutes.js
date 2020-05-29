const express = require('express');
const path  = require('path');
const router = express.Router();

const webController = require(path.resolve(__dirname, '../controllers/webController.js'));
router.get('/', webController.index );
router.get('/heroes', webController.indexHeroes);

//Métodos en los controladores: index - show -  edit - delete - store 

module.exports = router;


