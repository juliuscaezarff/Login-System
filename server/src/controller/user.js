const model = require('../models');
const User = model.User

module.exports = {
  async createUser(req, res) {

    try{
    const { name, phone, email, password_hash } = req.body

    const saveUser = await User.create({
      name, phone, email, password_hash
    })

    return res.json({ saveUser })
  }catch(err) {
    return res.json({msg: "Erro ao salvar o usuario" + err})
  }
  }
}