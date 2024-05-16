import Body from "./components/Body";
import Header from "./components/Header";

import { createBrowserRouter, Outlet } from "react-router-dom";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
