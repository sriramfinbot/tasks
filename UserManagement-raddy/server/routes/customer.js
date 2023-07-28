const express =  require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// customer Routes

router.get('/', customerController.homepage);
router.get('/add', customerController.addCustomer);
router.post('/add', customerController.postCustomer);



module.exports = router;