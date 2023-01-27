import { DefaultEventsMap } from "socket.io/dist/typed-events";
import socketio, { ServerOptions, Namespace as SocketNamespace } from "socket.io";

type WSType = ServerOptions;

type IO = socketio.Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;

type Namespace = SocketNamespace<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;

export { WSType, IO, Namespace };
