import { toggleClassNameByElement } from "../controllers/html-templates/animateHTML";

function NoMessagesConfiguration() {
  this.elementName = "div";
  this.className = "no-messages-wrapper";
  this.childs = [
    {
      elementName: "p",
      textContent: "X",
      className: "close-no-messages",
      eventListener: {
        eventName: "click",
        fatherElementInTheParams: true,

        method: (fatherElement) =>
          toggleClassNameByElement([fatherElement], ["hidden"]),
      },
    },
    {
      elementName: "img",
      isImage: true,
      src: "",
      alt: "",
      className: "no-messages-img",
    },
    {
      elementName: "h1",
      textContent: "No messages!",
      className: "no-messages-title",
    },
    {
      elementName: "p",
      textContent:
        "Send your first question to the personal assistant reply you!",
      className: "no-messages-description",
    },
  ];
}

export default NoMessagesConfiguration;
