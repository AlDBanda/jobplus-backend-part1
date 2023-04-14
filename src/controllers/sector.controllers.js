const sectorService = require('../services/sector.services');

//create sector
const createSector = async (req, res) => {
  try {
    const body = {name: req.body.name, image: req.file.filename};
    const sector = await sectorService.createSector(body);
    return res.status(201).json({ sector });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


//get all sectors
const getAllSectors = async (req, res) => {
  try {
    const sectors = await sectorService.getAllSectors();
    return res.status(200).json({ sectors });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

//delete sector
const deleteSector = async (req, res) => {
  try {
    const { id } = req.params;
    const sector = await sectorService.deleteSector(id);
    return res.status(200).json({message: 'Deleted succesfully', sector });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


//edit sector
const editSector = async (req, res) => {
  try {
    const { id } = req.params;
    const body = {name: req.body.name, image: req.file.filename};
    const sector = await sectorService.editSector(id, body);
    return res.status(200).json({ sector });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
//export module
module.exports = {
  createSector,
  getAllSectors,
  deleteSector,
  editSector,
};