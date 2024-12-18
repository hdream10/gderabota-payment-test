import "@/styles/global.css";
import { RouterProvider } from "react-router-dom";
import router from "@/router/config";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
