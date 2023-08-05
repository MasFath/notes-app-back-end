const NotesHandler = require("./handler");
const route = require("./routes");
const { server } = require("@hapi/hapi");

module.exports = {
  name: "notes",
  version: "1.0.0",
  register: async (server, { service }) => {
    const notesHandler = new NotesHandler(service);
    server.route(route(notesHandler));
  },
};
