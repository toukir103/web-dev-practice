import { useEffect, useState } from "react";
const Users = () => {
   const [users, setUsers] = useState([]);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email }; 

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server response:", data);
         setUsers([...users, user]);
          alert("✅ User added successfully!");
        e.target.reset(); // clear form
      })
      .catch((err) => console.error("❌ Error:", err));
  };

   const handleDelete = (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("🗑️ User deleted successfully!");
          setUsers(users.filter((user) => user._id !== id)); // Update UI instantly
        }
      });
  };
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Error loading users:", err));
  }, []);
  return (
    <div>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Enter name" required /> <br />
        <input type="email" name="email" placeholder="Enter email" required /> <br />
        <input type="submit" value="Add user" />
      </form>
      <p>---------------------------------</p>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>👥 User List from MongoDB</h2>

      {users.length === 0 ? (
        <p>⏳ Loading users...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {users.map((user) => (
            <li key={user._id} style={{ marginBottom: "10px" }}>
              <strong>{user.name}</strong> — {user.email}
               <button
              onClick={() => handleDelete(user._id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default Users;
