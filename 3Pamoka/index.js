const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

const port = 3000;

const posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

// find all users
app.get("/posts", (req, res) => {
  const { title } = req.query;
  const foundTitle = posts.find((post) => post.title === title);
  if (foundTitle) {
    res.send(foundTitle);
  } else {
    res.send(posts);
  }
});

app.get("/posts/:id", (req, res) => {
  const { id } = req.params;

  const foundPost = posts.filter((post) => post.id === +id);
  if (foundPost.length !== 0) {
    res.send(foundPost);
  } else {
    res.status(404).send(`Failed to find post `);
  }
});

app.post("/posts", (req, res) => {
  const { title, userId, body } = req.body;
  const newPost = {
    userId,
    id: Date.now(),
    title,
    body,
  };
  posts.push(newPost);
  res.send(posts);
});

app.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = req.body;

  const foundIndex = posts.findIndex((post) => post.id === +id);

  if (foundIndex !== -1) {
    const updatedPost = { id: +id, ...post };
    posts.splice(foundIndex, 1, updatedPost);
    res.send(updatedPost);
  } else res.status(404).send({ error: "Failed to update post" });
});

app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;

  const foundIndex = posts.findIndex((post) => post.id === +id);

  if (foundIndex !== -1) {
    const deletePost = posts[foundIndex];
    posts.splice(foundIndex, 1);
    res.send(deletePost);
  } else res.status(404).send({ error: "Failled to delete post" });
});

app.listen(port, () => {
  console.log(`app listening to port: ${port}`);
});
