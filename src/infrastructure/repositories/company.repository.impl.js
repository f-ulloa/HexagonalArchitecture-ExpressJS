import db from "../db/database.js";
import Company from "../../domain/entities/company.entity.js";
import { CompanyRepository } from "../../domain/repositories/company.repository.js";

export default class CompanyRepositoryImpl extends CompanyRepository {
  async create(companyName, companyApiKey) {
    const query = `INSERT INTO companies (company_name, company_api_key) VALUES (?, ?)`;

    let result;
    try {
      result = await db.run(query, [companyName, companyApiKey]);
    } catch (error) {
      throw new Error("Could not create company: " + error.message);
    }

    const companyId = result.lastID;
    return new Company(companyId, companyName, companyApiKey);
  }

  async findAll() {
    try {
      return await db.all(`SELECT * FROM companies`);
    } catch (error) {
      throw new Error("Could not get companies: " + error.message);
    }
  }

  async findById(companyId) {
    try {
      return await db.all(`SELECT * FROM companies where company_id = ?`, [
        companyId,
      ]);
    } catch (error) {
      throw new Error("Could not get company: " + error.message);
    }
  }

  async update(company) {
    try {
      const query = `UPDATE companies SET company_name = ?, company_api_key = ? WHERE company_id = ?`;
      await db.run(query, [
        company.companyName,
        company.companyApiKey,
        company.companyId,
      ]);
    } catch (error) {
      throw new Error("Could not update company: " + error.message);
    }
  }

  async delete(companyId) {
    try {
      const query = `DELETE FROM companies WHERE company_id = ?`;
      await db.run(query, [companyId]);
    } catch (error) {
      throw new Error("Could not delete company: " + error.message);
    }
  }
}
