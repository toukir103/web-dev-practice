const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb'); // <-- এখানে ObjectId যোগ করতে হবে
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://toukirahmed:DzHyrlg6pOkksvEv@cluster0.kq0bvud.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const database = client.db("usersDB");
    const userCollection = database.collection("users");

    // ✅ POST route: Add user to MongoDB
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result);
    });
    // ✅ DELETE route: Delete user by ID
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });

    // ✅ GET route: Get all users
    app.get("/users", async (req, res) => {
      const users = await userCollection.find().toArray();
      res.send(users);
    });

    console.log("✅ Connected to MongoDB successfully!");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
  }
}

run();

app.get("/", (req, res) => {
  res.send("Hello Toukir from Server!");
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
