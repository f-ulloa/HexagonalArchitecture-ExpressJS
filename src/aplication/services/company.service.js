import { v4 as uuidv4 } from "uuid";

export default class CompanyService {
  constructor(companyRepository) {
    this.companyRepository = companyRepository;
  }

  async createCompany(companyName) {
    const companyApiKey = uuidv4();
    try {
      return this.companyRepository.create(companyName, companyApiKey);
    } catch (error) {
      //TODO: custom logger for these errors
      throw new Error("Error creating company: " + error.message);
    }
  }

  async getCompanies() {
    try {
      return this.companyRepository.findAll();
    } catch (error) {
      //TODO: custom logger for these errors
      throw new Error("Error retrieving companies: " + error.message);
    }
  }

  async updateCompany(company) {
    try {
      return this.companyRepository.update(company);
    } catch (error) {
      //TODO: custom logger for these errors
      throw new Error("Error updating company: " + error.message);
    }
  }

  async deleteCompany(id) {
    try {
      return this.companyRepository.delete(id);
    } catch (error) {
      //TODO: custom logger for these errors
      throw new Error("Error deleting company: " + error.message);
    }
  }
}
