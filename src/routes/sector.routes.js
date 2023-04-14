const router = require('express-promise-router')(); // this is a wrapper for express router that allows us to use async/await
const multer = require('multer'); // middleware for handling multipart/form-data, which is primarily used for uploading files
const upload = multer({dest: 'uploads/'}); // this saves our uploaded file to this directory
const sectorController = require('../controllers/sector.controllers');
const auth = require('../middlewares/auth.middleware'); // import our controller


router.post('/sectors', auth, upload.single('image'), sectorController.createSector);
router.get('/sectors', auth, sectorController.getAllSectors); 
router.delete('/sectors/:id', auth, sectorController.deleteSector);
router.put('/sectors/id', auth, upload.single('image'), sectorController.editSector);

module.exports = router;