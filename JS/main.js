const usuariosArray = [];

document.getElementById("navigateBtn").addEventListener("click", () => {
  window.location.href = "paginas/contato.html";
});

document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();
  adicionarUsuario();
});

function adicionarUsuario() {
  const nome = document.getElementById("nomeUsuario").value.trim();
  const email = document.getElementById("emailUsuario").value.trim();

  if (!nome || !email) {
    alert("Preencha todos os campos.");
    return;
  }

  const usuario = { nome, email };
  usuariosArray.push(usuario);

  atualizarListaUsuarios();
  limparCampos();
}

function removerUsuario(email) {
  const index = usuariosArray.findIndex(u => u.email === email);
  if (index > -1) {
    usuariosArray.splice(index, 1);
    atualizarListaUsuarios();
  }
}

function atualizarListaUsuarios() {
  const lista = document.getElementById("listaUsuarios");
  lista.innerHTML = "";

  usuariosArray.forEach(usuario => {
    const li = document.createElement("li");
    li.innerHTML = `${usuario.nome} - ${usuario.email} 
      <button onclick="removerUsuario('${usuario.email}')">Remover</button>`;
    lista.appendChild(li);
  });
}

function limparCampos() {
  document.getElementById("nomeUsuario").value = "";
  document.getElementById("emailUsuario").value = "";
}
