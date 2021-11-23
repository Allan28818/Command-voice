module.exports = {
  handleSave(req, res) {
    const { messages } = req.body;
    alert("hey");
    console.log("hey");

    console.log("message from handleSave [handleSaveMessages.js]");

    res.json({ message: "Ok" });
  },
};
