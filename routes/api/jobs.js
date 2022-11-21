const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/api/jobs')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/index', ensureLoggedIn, jobsCtrl.index);
router.post('/create', ensureLoggedIn, jobsCtrl.create);
router.get(`/:selectedProperty`, ensureLoggedIn, jobsCtrl.show)
router.delete('/delete/:id', ensureLoggedIn, jobsCtrl.delete);
router.put('/:id', ensureLoggedIn, jobsCtrl.update);


module.exports = router;