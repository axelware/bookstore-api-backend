const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ msg: "Usuário registado com sucesso!" });
  } catch (e) { res.status(400).json({ error: "Erro ao registar usuário." }); }
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(senha, user.senha))) {
    return res.status(401).json({ msg: "Credenciais inválidas" });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};