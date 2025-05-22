const express = require('express');
const router = express.Router();
const db = require('../DB/db');

// CREATE
router.post('/', (req, res) => {
  const { nome, descricao, link } = req.body
  const sql = 'INSERT INTO projetos (nome, descricao, link) VALUES (?, ?, ?)'
  db.query(sql, [nome, descricao, link], (err, result) => {
    if (err) return res.status(500).send(err)
    res.send({ id: result.insertId, nome, descricao, link })
  })
})

// READ
router.get('/', (req, res) => {
  db.query('SELECT * FROM projetos', (err, results) => {
    if (err) return res.status(500).send(err)
    res.send(results)
  })
})

// READ por id
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM projetos WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).send(err)
    if (result.length === 0) return res.status(404).send({ mensagem: 'Projeto não encontrado' })
    res.send(result[0])
  })
})

// UPDATE
router.put('/:id', (req, res) => {
  const { nome, descricao, link } = req.body
  const sql = 'UPDATE projetos SET nome = ?, descricao = ?, link = ? WHERE id = ?'
  db.query(sql, [nome, descricao, link, req.params.id], (err) => {
    if (err) return res.status(500).send(err)
    res.send({ mensagem: 'Projeto atualizado' })
  })
})

// DELETE
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM projetos WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err)
    res.send({ mensagem: 'Projeto excluído' })
  })
})

module.exports = router