import * as io from "socket.io-client";

class Socket {
  private socket;
  constructor() {
    this.socket = io.connect("https://socket.patra.store", {
      transports: ["websocket"]
    });
  }
  getSocket() {
    return this.socket;
  }
}

export default new Socket;