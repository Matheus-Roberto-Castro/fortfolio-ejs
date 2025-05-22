const express = require('express');
const router = express.Router();
const db = require('../DB/db');

//CREATE
router.post('/', (req, res) => {
    const { nome } = req.body;
    const sql = 'INSERT INTO tecnologias (nome) VALUES (?)';
    db.query(sql, [nome], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ id: result.insertId, nome });
    });
})

//READ
router.get('/', (req, res) => {
    db.query('SELECT * FROM tecnologias', (err, results) => {
        if (err) return res.status(500).send(err)
        res.send(results)
    })
})

// READ por id
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM tecnologias WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).send(err)
    if (result.length === 0) return res.status(404).send({ mensagem: 'Tecnologia não encontrada' })
    res.send(result[0])
  })
})

// UPDATE
router.put('/:id', (req, res) => {
  const { nome } = req.body
  const sql = 'UPDATE tecnologias SET nome = ? WHERE id = ?'
  db.query(sql, [nome, req.params.id], (err) => {
    if (err) return res.status(500).send(err)
    res.send({ mensagem: 'Tecnologia atualizada com sucesso' })
  })
})

// DELETE
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM tecnologias WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err)
    res.send({ mensagem: 'Tecnologia excluída com sucesso' })
  })
})

module.exports = router