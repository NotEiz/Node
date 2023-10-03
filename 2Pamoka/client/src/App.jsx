import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
const API = "http://localhost:3000/users";
const fetchPosts = async () => {
  const response = await axios.get(API);
  return response.data;
};

const createPost = async (post) => {
  const response = await axios.post(API, post);
  return response.data;
};

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchPosts().then((resp) => setUsers(resp));
  }, [users]);

  return (
    <>
      <h1>Registration form</h1>
      <Formik
        initialValues={{ name: "", surname: "" }}
        onSubmit={async (values, formikHelpers) => {
          await createPost(values);
          formikHelpers.resetForm();
        }}
      >
        <Form>
          <Field name="name" placeholder="Name..." type="text" />
          <br />
          <Field name="surname" placeholder="Surname..." />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>Name: {user.name}</p> <p>Surname: {user.surname}</p>{" "}
            <p>Car: {user.car}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
