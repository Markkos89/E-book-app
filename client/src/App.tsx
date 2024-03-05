import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { BookCard } from "./components/BookCard";
import { NewBookForm } from "./components/NewBookForm";

export interface IBookData {
  _id: string;
  path: string;
  name: string;
  description: string;
  createdAt: string;
}

function App() {
  const [data, setData] = useState<IBookData[]>([]);

  const getFiles = async () => {
    const filesData = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/files`
    );

    // console.log(filesData);
    setData(filesData.data.files);
  };

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <>
      <div className="container mt-3">
        <h1>E-book Uploader / Downloader</h1>
        <div className="text-end">
          <NewBookForm />
        </div>

        <div className="d-flex row justify-content-between align-items-center mt-5 ">
          {data?.length > 0
            ? data.map((file, idx) => <BookCard book={file} />)
            : null}
        </div>
      </div>
    </>
  );
}

export default App;
