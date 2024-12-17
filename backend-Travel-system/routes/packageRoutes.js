const express = require('express');
const { getPackages, getPackageById, addPackage, deletePackage , updatePackage} = require('../controllers/packageController');
const router = express.Router();

router.get('/', getPackages);
router.get('/:id', getPackageById);
router.post('/admin', addPackage);
router.delete('/admin/:id', deletePackage);
router.put('/adminupdate/:id', updatePackage);

module.exports = router;
