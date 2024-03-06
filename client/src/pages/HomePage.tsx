import axios from "axios";
import { useState, useEffect } from "react";
import { IBookData } from "../App";
import { BookCard } from "../components/BookCard";

export const HomePage = () => {
  const [data, setData] = useState<IBookData[]>([]);

  const getFiles = async () => {
    const filesData = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/files`
    );

    setData(filesData.data.files);
  };

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <div className="container mt-3">
      <h2>Browse </h2>
      <div className="flex row justify-between items-center mx-auto mt-5">
        {data?.length > 0
          ? data.map((file, idx) => <BookCard book={file} />)
          : null}
      </div>
    </div>
  );
};
