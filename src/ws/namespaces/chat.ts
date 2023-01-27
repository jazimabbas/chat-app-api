import { Socket } from "socket.io";
import { IO, Namespace } from "../utils/ws.type";

export default (_: IO, __: Namespace) => (socket: Socket) => {
  console.log("chat-namespace - socket connected", socket.id);
};
