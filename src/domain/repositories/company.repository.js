export class CompanyRepository {
  async create(companyName, companyApiKey) {
    throw new Error("This method must be overwritten");
  }

  async findAll() {
    throw new Error("This method must be overwritten");
  }

  async update(company) {
    throw new Error("This method must be overwritten");
  }

  async delete(id) {
    throw new Error("This method must be overwritten");
  }
}
