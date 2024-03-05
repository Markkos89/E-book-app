import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

type Props = {};

export const NewBookForm = (props: Props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | Blob | null>(null);

  const addNewFile = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      if (file !== null) {
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
          setFile(null);
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
      <h1>Upload your Image Here</h1>
      <Form onSubmit={addNewFile}>
        <Form.Group className="mb-3 mt-3" controlId="fileuploaderform">
          <Form.Label>Filename</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type the file name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-3" controlId="fileuploaderform">
          <Form.Label>File Description?</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type the file description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="fileuploaderform">
          <Form.Label>File</Form.Label>
          <Form.Control
            type="file"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.currentTarget?.files) {
                setFile(e.currentTarget?.files[0]);
              }
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
