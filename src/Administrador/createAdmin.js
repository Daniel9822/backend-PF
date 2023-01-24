const bcrypt = require("bcrypt");
const { Admin } = require("../models/admin")
const { SECRET_PASSOWORD_ADMIN } = process.env


const createAdmin = async () => {
    try {
        const pass = await bcrypt.hash(SECRET_PASSOWORD_ADMIN, 10);
        await Admin.findOrCreate({
            mail: 'admin@andromeda.com',
            password: pass
        })
        return "admin created"; 
    } catch (error) {
          return error.message
    }
}

module.exports = { createAdmin}; 