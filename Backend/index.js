const server = require("./server.js");
const port = 3000;
server.listen(port, () => {
    console.log("escuchando en puerto", port);
});