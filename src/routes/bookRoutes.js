const express = require('express');
const router = express.Router();
const bookCtrl = require('../controllers/bookController');
const auth = require('../middlewares/authMiddleware');

router.get('/', bookCtrl.getBooks); // Público
router.post('/', auth, bookCtrl.createBook); // Protegido (só com token)

module.exports = router;