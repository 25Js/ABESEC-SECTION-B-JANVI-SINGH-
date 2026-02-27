import React, { useState } from "react";

function UserManagementUI() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    contact: "",
    email: "",
    designation: "",
    company: "",
    address: "",
  });
  const [searchId, setSearchId] = useState("");
  const [viewUser, setViewUser] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!formData.id) {
      alert("ID is required");
      return;
    }

    const exists = users.find((u) => u.id === formData.id);
    if (exists) {
      alert("User with this ID already exists");
      return;
    }

    setUsers([...users, formData]);
    resetForm();
  };

  const handleUpdate = () => {
    const updatedUsers = users.map((u) =>
      u.id === formData.id ? formData : u
    );
    setUsers(updatedUsers);
    resetForm();
  };

  const handleDelete = () => {
    const filteredUsers = users.filter((u) => u.id !== formData.id);
    setUsers(filteredUsers);
    resetForm();
  };

  const handleSearch = () => {
    const found = users.find((u) => u.id === searchId);
    if (found) {
      setViewUser(found);
    } else {
      alert("User not found");
      setViewUser(null);
    }
  };

  const resetForm = () => {
    setFormData({
      id: "",
      name: "",
      contact: "",
      email: "",
      designation: "",
      company: "",
      address: "",
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>User Management System</h1>

      <div style={styles.section}>
        <h2>Add / Update User</h2>

        {Object.keys(formData).map((field) => (
          <div key={field} style={styles.inputGroup}>
            <label style={styles.label}>{field.toUpperCase()}</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter ${field}`}
              style={styles.input}
            />
          </div>
        ))}

        <div style={styles.buttonGroup}>
          <button style={styles.addBtn} onClick={handleAdd}>Add</button>
          <button style={styles.updateBtn} onClick={handleUpdate}>Update</button>
          <button style={styles.deleteBtn} onClick={handleDelete}>Delete</button>
        </div>
      </div>

      <div style={styles.section}>
        <h2>Search User By ID</h2>
        <div style={styles.searchGroup}>
          <input
            type="text"
            placeholder="Enter ID"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            style={styles.input}
          />
          <button style={styles.searchBtn} onClick={handleSearch}>
            Search
          </button>
        </div>

        {viewUser && (
          <div style={styles.viewBox}>
            <h3>User Details</h3>
            {Object.entries(viewUser).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}
          </div>
        )}
      </div>

      <div style={styles.section}>
        <h2>All Users</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              {Object.keys(formData).map((field) => (
                <th key={field} style={styles.th}>{field}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                {Object.values(user).map((value, i) => (
                  <td key={i} style={styles.td}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#9c9d9f",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
  },
  section: {
    backgroundColor: "#d6cece",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  inputGroup: {
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "4px",
    fontWeight: "bold",
  },
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  buttonGroup: {
    marginTop: "10px",
    display: "flex",
    gap: "10px",
  },
  addBtn: {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  updateBtn: {
    backgroundColor: "#ffc107",
    color: "black",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteBtn: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  searchGroup: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  },
  searchBtn: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  viewBox: {
    backgroundColor: "#eef2f7",
    padding: "10px",
    borderRadius: "6px",
    
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "#f2f2f2",
  },
  td: {
    border: "1px solid #ddd",
    padding: "8px",
  },
};

export default UserManagementUI;