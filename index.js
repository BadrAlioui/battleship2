// index.js
const pty = require('node-pty');
const { Server } = require("socket.io");
const http = require("http");
const static = require("node-static");

// sert les fichiers statiques
const fileServer = new static.Server("./static");
const server = http.createServer((req, res) => fileServer.serve(req, res));
const io = new Server(server);

io.on("connection", socket => {
  // on lance Python en mode non-bufferisé
  const shell = process.platform === "win32" ? "python" : "python3";
  const ptyProcess = pty.spawn(shell, ["-u", "run.py"], {
    name: "xterm-color",
    cols: 80,
    rows: 24
  });

  // chaque donnée reçue du pty on l’émet au front
  ptyProcess.onData(data => socket.emit("console_output", data));

  // quand l’utilisateur tape une commande, on l’écrit dans le pty
  socket.on("command_entered", cmd => {
    ptyProcess.write(cmd + "\r");
  });

  socket.on("disconnect", () => {
    ptyProcess.kill();
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Listening on ${PORT}`));
