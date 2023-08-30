import React from "react";
import { SocketProvider, ThemeProvider } from "./context";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Header } from "./components";
import { Chat, Home } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider>
      <SocketProvider>
        {/* <Header /> */}
        <RouterProvider router={router} />
      </SocketProvider>
    </ThemeProvider>
  );
}

export default App;
