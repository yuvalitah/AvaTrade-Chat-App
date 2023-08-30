import { ReactNode, createContext, useRef } from "react";
import io, { Socket } from "socket.io-client";

interface ISocketContext {
  socket: Socket;
}

interface ISocketProviderProps {
  children?: ReactNode;
}

export const SocketContext = createContext<ISocketContext>(
  {} as ISocketContext
);

export const SocketProvider = ({ children }: ISocketProviderProps) => {
  const socketRef = useRef(io("http://localhost:3001"));
  return (
    <SocketContext.Provider value={{ socket: socketRef.current }}>
      {children}
    </SocketContext.Provider>
  );
};
