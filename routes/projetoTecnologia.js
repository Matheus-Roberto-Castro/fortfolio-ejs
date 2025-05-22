const express = require('express');
const router = express.Router();
const db = require('../DB/db');

// Adicionar tecnologia a um projeto
router.post('/', (req, res) => {
  const { projeto_id, tecnologia_id } = req.body;
  const sql = 'INSERT INTO projeto_tecnologia (projeto_id, tecnologia_id) VALUES (?, ?)'
  db.query(sql, [projeto_id, tecnologia_id], (err, result) => {
    if (err) return res.status(500).send(err)
    res.send({ mensagem: 'Tecnologia adicionada ao projeto com sucesso' })
  })
})

// Remover tecnologia de um projeto
router.delete('/', (req, res) => {
  const { projeto_id, tecnologia_id } = req.body
  const sql = 'DELETE FROM projeto_tecnologia WHERE projeto_id = ? AND tecnologia_id = ?'
  db.query(sql, [projeto_id, tecnologia_id], (err, result) => {
    if (err) return res.status(500).send(err)
    if (result.affectedRows === 0) {
      return res.status(404).send({ mensagem: 'Relacionamento não encontrado' })
    }
    res.send({ mensagem: 'Tecnologia removida do projeto com sucesso' })
  })
})

// Ver tecnologias de um projeto
router.get('/projeto/:projeto_id', (req, res) => {
  const sql = `
    SELECT tecnologias.id, tecnologias.nome 
    FROM tecnologias 
    JOIN projeto_tecnologia ON tecnologias.id = projeto_tecnologia.tecnologia_id
    WHERE projeto_tecnologia.projeto_id = ?;
  `;
  db.query(sql, [req.params.projeto_id], (err, results) => {
    if (err) return res.status(500).send(err)
    res.send(results)
  })
})

// Ver projetos que usam uma tecnologia
router.get('/tecnologia/:tecnologia_id', (req, res) => {
  const sql = `
    SELECT projetos.id, projetos.nome, projetos.descricao 
    FROM projetos 
    JOIN projeto_tecnologia ON projetos.id = projeto_tecnologia.projeto_id
    WHERE projeto_tecnologia.tecnologia_id = ?;
  `;
  db.query(sql, [req.params.tecnologia_id], (err, results) => {
    if (err) return res.status(500).send(err)
    res.send(results)
  })
})

module.exports = router