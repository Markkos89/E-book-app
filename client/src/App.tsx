import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { NotFoundPage } from "./pages/NotFoundPage";
import { HomePage } from "./pages/HomePage";
import { NewBookPage } from "./pages/NewBookPage";

export interface IBookData {
  _id: string;
  path: string;
  name: string;
  description: string;
  createdAt: string;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="newbook" element={<NewBookPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
