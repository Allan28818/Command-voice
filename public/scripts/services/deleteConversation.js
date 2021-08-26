const deleteButton = document.querySelector(".card>ul>li>.delete");

function deleteConversation() {
  localStorage.removeItem("conversation");
  alert("Sua conversa foi apagada com sucesso!");

  return location.reload();
}

deleteButton.addEventListener("click", deleteConversation);
