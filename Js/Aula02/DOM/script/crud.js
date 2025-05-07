
const usuarios = [
    {id: 1, nome: 'Ana Banana', email: 'ana@teste.com'},
    {id: 2, nome: 'Anica vatore', email: 'anica@teste.com'},
    {id: 3, nome: 'Caleb Vatore', email: 'caleb@teste.com'},
];

function renderizarUsuarios() {
    const usuariosDiv = document.getElementById('usuarios');
    usuariosDiv.innerHTML = ""; 

    usuarios.forEach((usuario) => {
        const usuarioDiv = document.createElement('div');
        usuarioDiv.classList.add('usuario');
        usuarioDiv.id = `usuario-${usuario.id}`;
        usuarioDiv.innerHTML = `
            <h2>${usuario.nome}</h2>
            <p>Email: ${usuario.email}</p>
            <button class='botao-editar btn btn-warning' onclick='editarUsuario(${usuario.id})'>Editar</button>
            <button class='botao-deletar btn btn-danger' onclick='deletarUsuario(${usuario.id})'>Deletar</button>        
        `;
        usuariosDiv.appendChild(usuarioDiv);
    });    
}

document
  .getElementById("formUsuario")
  .addEventListener("submit", adicionarUsuario);

//função para adicionar user
function adicionarUsuario(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  //usando um operador ternário, a linha verifica se o array já possui elementos
  //se sim, ele obtém o id do último user e adiciona mais um
  //se não - é após os ":" ele define como 1
  const id = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;

  usuarios.push({ id, nome, email }); //cria o objeto com id, nome e email e add no final do array
  renderizarUsuarios();
  document.getElementById("formUsuario").reset();
}

//função editar usuário
function editarUsuario(id) {
  const usuarioIndex = usuarios.findIndex((u) => u.id === id);
  if (usuarioIndex > -1) {
    const usuario = usuarios[usuarioIndex];
    document.getElementById("nome").value = usuario.nome;
    document.getElementById("email").value = usuario.email;

    document
      .getElementById("formUsuario")
      .removeEventListener("submit", adicionarUsuario);
    
      const atualizarUsuario = function (event) {
      event.preventDefault();
      usuarios[usuarioIndex].nome = document.getElementById("nome").value;
      usuarios[usuarioIndex].email = document.getElementById("email").value;
      renderizarUsuarios();
      document.getElementById("formUsuario").reset();
      document
        .getElementById("formUsuario")
        .removeEventListener("submit", atualizarUsuario);
      document
        .getElementById("formUsuario")
        .addEventListener("submit", adicionarUsuario);
    };
    document
      .getElementById("formUsuario")
      .addEventListener("submit", atualizarUsuario);
  }
}

//função para deletar user
function deletarUsuario(id) {
  const index = usuarios.findIndex((u) => u.id === id);
  if (index > -1) {
    usuarios.splice(index, 1);
    renderizarUsuarios();
  }
}

renderizarUsuarios();
