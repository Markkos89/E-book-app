import { IBookData } from "../App";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import moment from "moment";
import axios from "axios";

type Props = {
  book: IBookData;
};

export const BookCard = ({ book }: Props) => {
  const handleDelete = async (id: string) => {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/delete`,
      {
        id,
      }
    );

    if (res.data.status === true) {
      //   getFiles();
      alert("deleted");
    } else {
      alert("error");
    }
  };

  const handleDownloadFile = (filePath: string, fileName: string) => {
    fetch(filePath, {
      method: "GET",
      headers: {
        "Content-Type": "application/jpg",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));

        const link = document.createElement("a");
        const extension = filePath.split(".")[3];
        link.href = url;
        link.download = fileName + "." + extension;

        document.body.appendChild(link);

        link.click();

        link.parentNode?.removeChild(link);
      });
  };

  return (
    <Card style={{ width: "22rem" }} className="mb-3 min-h-80">
      <Card.Img
        variant="top"
        src={book.path}
        style={{
          width: "100%",
          textAlign: "center",
          margin: "auto",
        }}
        className="mt-2"
      />
      <Card.Body>
        <Card.Title>{book.name}</Card.Title>
        <Card.Subtitle>{book.description}</Card.Subtitle>
        <Card.Text>Date Added : {moment(book.createdAt).format("L")}</Card.Text>
        <div className="flex gap-2">
          <Button
            variant="danger"
            className="col-lg-6 text-center"
            onClick={() => {
              handleDelete(book._id);
            }}
          >
            Delete
          </Button>
          <Button
            variant="success"
            className="col-lg-6 text-center"
            onClick={() => {
              handleDownloadFile(
                book.path,
                book.name.replace(" ", "") + book.description.replace(" ", "")
              );
            }}
          >
            Download
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
