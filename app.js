const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Página Inicial' });
});

app.get('/sobre', (req, res) => {
    res.render('sobre', { title: 'Sobre Mim' });
});

app.get('/habilidades', (req, res) => {
    const habilidades = [
        { nome: 'HTML5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { nome: 'CSS3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { nome: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { nome: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
        { nome: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { nome: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
        { nome: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
        { nome: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg' },
        { nome: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
        { nome: 'Tailwind CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { nome: 'Figma', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
        { nome: 'AWS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { nome: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg' },
        { nome: 'Jira', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg' }
    ];

    res.render('habilidades', { title: 'Minhas Habilidades', habilidades });
});

app.get('/projetos', (req, res) => {
    const projetos = [
        {
            titulo: 'Desempenho de Vereadores',
            descricao: 'Desenvolvimento de uma página web responsiva com visualizações gráficas para representar a atuação geral da câmara.',
            imagem: '/img/spoiler-api1.png',
            link: 'https://github.com/Draco-Imperium/API_FATEC1'
        },
        {
            titulo: 'Dashboard de Indicadores',
            descricao: 'Desenvolvimento de um dashboard de indicadores para monitorar e visualizar o impacto da plataforma, fornecendo dados estratégicos para patrocinadores e stakeholders.',
            imagem: '/img/spoiler-api2.png',
            link: 'https://github.com/GeneSys-fatec/API-2DSM'
        },
    ];

    res.render('projetos', {title: 'Meus Projetos', projetos }); 
});

app.get('/contato', (req, res) => {
    res.render('contato', { title: 'Contato' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});