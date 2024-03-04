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
    const res = await axios.post("http://localhost:4000/delete", {
      id,
    });

    if (res.data.status === true) {
      //   getFiles();
      alert("deleted");
    } else {
      alert("error");
    }
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
              alert("download WIP");
            }}
          >
            Download
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
