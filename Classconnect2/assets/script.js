// Dados simulados de alunos/famílias (JSON)
const alunosFamilias = [
    { nome: 'João', idade: 10, serie: '5º ano', responsavel: 'Ana' },
    { nome: 'Maria', idade: 12, serie: '7º ano', responsavel: 'Carlos' },
    { nome: 'Pedro', idade: 9, serie: '4º ano', responsavel: 'Marta' },
    { nome: 'Ana', idade: 11, serie: '6º ano', responsavel: 'Paulo' },
    { nome: 'Lucas', idade: 13, serie: '8º ano', responsavel: 'Sandra' }
];

// Função para exibir os dados na página
function mostrarAlunosFamilias() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ''; // Limpa o conteúdo anterior

    alunosFamilias.forEach(aluno => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h2>Nome: ${aluno.nome}</h2>
            <p>Idade: ${aluno.idade} anos</p>
            <p>Série: ${aluno.serie}</p>
            <p>Responsável: ${aluno.responsavel}</p>
        `;
        mainContent.appendChild(card);
    });
}

// Chama a função para exibir os dados ao carregar a página
mostrarAlunosFamilias();
