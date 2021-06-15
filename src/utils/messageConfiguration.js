function MessageConfiguration() {
  this.elementName = "article";
  this.className = "my-message";
  this.childs = [
    {
      elementName: "p",
      className: "message-text",
      textContent: "Algum erro ocorreu em sua mensagem... tente mais tarde!",
    },
    {
      elementName: "span",
      className: "time",
      textContent: "--:--",
    },
  ];
}

export default MessageConfiguration;
