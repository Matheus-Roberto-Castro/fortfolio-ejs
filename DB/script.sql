lcreate database portfolio;

use portfolio;

CREATE TABLE tecnologias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE projetos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    link VARCHAR(255)
);

CREATE TABLE projeto_tecnologia (
    projeto_id INT NOT NULL,
    tecnologia_id INT NOT NULL,
    PRIMARY KEY (projeto_id, tecnologia_id),
    FOREIGN KEY (projeto_id) REFERENCES projetos(id) ON DELETE CASCADE,
    FOREIGN KEY (tecnologia_id) REFERENCES tecnologias(id) ON DELETE CASCADE
);

INSERT INTO tecnologias (nome) VALUES 
('Node.js'),
('React'),
('MySQL'),
('TailwindCSS'),
('JavaScript'),
('TypeScript'),
('Flask'),
('HTML5'),
('CSS3'),
('Python');

INSERT INTO projetos (nome, descricao, link) VALUES 
('Desempenho de Vereadores', 'Desenvolvimento de uma página web responsiva com visualizações gráficas para representar a atuação geral da câmara.', 'https://github.com/Draco-Imperium/API_FATEC1'),
('Dashboard de Indicadores', 'Desenvolvimento de um dashboard de indicadores para monitorar e visualizar o impacto da plataforma, fornecendo dados estratégicos para patrocinadores e stakeholders.', 'https://github.com/GeneSys-fatec/API-2DSM');

INSERT INTO projeto_tecnologia (projeto_id, tecnologia_id) VALUES 
(1, 7), 
(1, 8), 
(1, 9), 
(1, 10), 
(1, 3), 
(2, 1),
(2, 2),
(2, 3),
(2, 6);