import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export const NewBookPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | Blob | undefined>(undefined);
  const inputFile = useRef<HTMLInputElement>(null);

  const addNewFile = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      if (file !== undefined) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", name);
        formData.append("description", description);

        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };

        const res = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/upload`,
          formData,
          config
        );
        if (res.data.status === true) {
          alert("success");
          // clean form
          setName("");
          setDescription("");
          inputFile.current!.value = "";
          inputFile.current!.type = "text";
          inputFile.current!.type = "file";
        } else {
          alert("error");
        }
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div className="container mt-3">
      <h2>Upload New Book</h2>
      <div className="container mt-3">
        <Form onSubmit={addNewFile}>
          <Form.Group className="mb-3 mt-3" controlId="filenamecontrol">
            <Form.Label>Book Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type the Book Author"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </Form.Group>
          <Form.Group className="mb-3 mt-3" controlId="filedescriptioncontrol">
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type the Book Name"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="filecontrol">
            <Form.Label>Book Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.currentTarget?.files) {
                  setFile(e.currentTarget?.files[0]);
                }
              }}
              ref={inputFile}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};
