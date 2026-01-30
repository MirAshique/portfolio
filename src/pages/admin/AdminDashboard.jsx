import { useEffect, useState } from "react";
import "./Admin.css";

const API_URL = "https://portfolio-backend-09r1.onrender.com";

function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      window.location.href = "/admin/login";
      return;
    }

    const fetchMessages = async () => {
      try {
        const res = await fetch(`${API_URL}/api/admin/messages`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.message);

        setMessages(data.messages || []);
      } catch (err) {
        setError("Unauthorized or server error");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [token]);

  const deleteMessage = async (id) => {
    if (!window.confirm("Delete this message?")) return;

    await fetch(`${API_URL}/api/admin/messages/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setMessages((prev) => prev.filter((m) => m._id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  if (loading) return <p className="admin-empty">Loading messages...</p>;
  if (error) return <p className="admin-empty">{error}</p>;

  return (
    <div className="admin-wrapper">
      <div className="admin-container">

        <div className="admin-header">
          <h2>Admin Dashboard</h2>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="admin-stats">
          <h3>Total Messages: {messages.length}</h3>
        </div>

        {messages.length === 0 ? (
          <p className="admin-empty">No messages yet.</p>
        ) : (
          messages.map((msg) => (
            <div key={msg._id} className="message-card">
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Message:</strong> {msg.message}</p>
              <small>{new Date(msg.createdAt).toLocaleString()}</small>

              <div className="message-actions">
                <button
                  className="delete-btn"
                  onClick={() => deleteMessage(msg._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default AdminDashboard;
