const conversationData = [];

// Array.prototype.listeners = {};
// Array.prototype.addListener = function (eventName, callback) {
//   if (!this.listeners[eventName]) {
//     this.listeners[eventName] = [];
//   }
//   this.listeners[eventName].push(callback);
// };
// Array.prototype.pushWithEvent = function () {
//   const size = this.length;
//   const argsList = Array.prototype.slice.call(arguments);
//   for (let index = 0; index < argsList.length; index++) {
//     this[size + index] = argsList[index];
//   }
//   this.triggerEvent("add", argsList);
// };
// Array.prototype.triggerEvent = function (eventName, elements) {
//   if (this.listeners[eventName] && this.listeners[eventName].length) {
//     this.listeners[eventName].forEach((callback) =>
//       callback(eventName, elements, this)
//     );
//   }
// };

export { conversationData };
