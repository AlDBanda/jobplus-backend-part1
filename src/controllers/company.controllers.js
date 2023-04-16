const companyServices = require('../services/company.services');

//create company
const createCompany = async (req, res) => {
  try {
    const company = await companyServices.createCompany(req.body);
    res.status(201).send(company);
  }
  catch (error) {
    res.status(400).send({ error: error.message });
  }
};

  //get all companies
  const getAllCompanies = async (req, res) => {
    try {
      const companies = await companyServices.getALlCompanies();
      res.status(201).send(companies);
    }
    catch (error) {
      res.status(400).send({ error: error.message });
    }
  };

  //update company
  const updateCompany = async (req, res) => {
    try {
      const company = await companyServices.updateCompany(req.params.id, req.body);
      res.status(201).send(company);
    }
    catch (error) {
      res.status(400).send({ error: error.message });
    }
  };

  //delete company
  const deleteCompany = async (req, res) => {
    try {
      const company = await companyServices.deleteCompany(req.params.id);
      res.status(201).send({ message: 'Company deleted successfully', company });
    }
    catch (error) {
      res.status(400).send({ error: error.message });
    }
  };

  module .exports ={
    createCompany,
    getAllCompanies,
    updateCompany,
    deleteCompany
  };