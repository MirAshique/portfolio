import { useEffect, useState } from "react";
import "./Admin.css";

const API_URL = process.env.REACT_APP_API_URL;

function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      window.location.href = "/admin/login";
      return;
    }

    const fetchMessages = async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/admin/messages?page=${page}&limit=5`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch messages");
        }

        setMessages(data.messages || []);
        setPages(data.pagination.pages);
      } catch (err) {
        setError("Unauthorized or server error");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [token, page]);

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

  const markRead = async (id) => {
    await fetch(`${API_URL}/api/admin/messages/${id}/read`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setMessages((prev) =>
      prev.map((m) =>
        m._id === id ? { ...m, isRead: true } : m
      )
    );
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

        {messages.map((msg) => (
          <div
            key={msg._id}
            className={`message-card ${msg.isRead ? "read" : "unread"}`}
          >
            <p><strong>Name:</strong> {msg.name}</p>
            <p><strong>Email:</strong> {msg.email}</p>
            <p><strong>Message:</strong> {msg.message}</p>
            <small>{new Date(msg.createdAt).toLocaleString()}</small>

            <div className="message-actions">
              <a
                href={`mailto:${msg.email}?subject=Reply from CodeFlux`}
                className="reply-btn"
              >
                Reply
              </a>

              {!msg.isRead && (
                <button
                  className="read-btn"
                  onClick={() => markRead(msg._id)}
                >
                  Mark as Read
                </button>
              )}

              <button
                className="delete-btn"
                onClick={() => deleteMessage(msg._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        <div className="pagination">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </button>

          <span>Page {page} of {pages}</span>

          <button
            disabled={page === pages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
