import { useEffect, useState } from "react";
import "./Admin.css";

const API_URL = process.env.REACT_APP_API_URL;

function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      window.location.href = "/admin/login";
      return;
    }

    const fetchMessages = async () => {
      const res = await fetch(
        `${API_URL}/api/admin/messages?page=${page}&limit=5`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();
      setMessages(data.messages || []);
      setPages(data.pagination.pages);
      setLoading(false);
    };

    fetchMessages();
  }, [page, token]);

  const deleteMessage = async (id) => {
    if (!window.confirm("Delete this message?")) return;

    await fetch(`${API_URL}/api/admin/messages/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    setMessages((prev) => prev.filter((m) => m._id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  if (loading) return <p className="admin-empty">Loading messages...</p>;

  return (
    <div className={`admin-wrapper ${darkMode ? "dark" : ""}`}>
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <h2 className="logo">CodeFlux</h2>

        <button className="sidebar-btn active">Dashboard</button>

        <button
          className="sidebar-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <button className="sidebar-logout" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="admin-main">
        <h1>Admin Dashboard</h1>

        {/* STATS */}
        <div className="stats-grid">
          <div className="stat-card">
            <span>Today</span>
            <strong>{messages.length}</strong>
          </div>
          <div className="stat-card">
            <span>This Week</span>
            <strong>{messages.length}</strong>
          </div>
          <div className="stat-card">
            <span>Total</span>
            <strong>{messages.length}</strong>
          </div>
        </div>

        {/* EMPTY STATE */}
        {messages.length === 0 ? (
          <div className="empty-card">
            📭 No messages yet
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg._id} className="message-card">
              <h3>👤 {msg.name}</h3>

              <p className="email">📧 {msg.email}</p>

              <p className="message">
                💬 {msg.message}
              </p>

              <small>🕒 {new Date(msg.createdAt).toLocaleString()}</small>

              <div className="message-actions">
                <a
                  href={`mailto:${msg.email}?subject=Reply from CodeFlux`}
                  className="reply-btn"
                >
                  Reply
                </a>

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

        {/* PAGINATION */}
        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Previous
          </button>

          <span>
            Page {page} of {pages}
          </span>

          <button disabled={page === pages} onClick={() => setPage(page + 1)}>
            Next
          </button>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
