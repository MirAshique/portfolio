import { useEffect, useState } from "react";

function AdminDashboard() {
  const [messages, setMessages] = useState([]); // ✅ MUST be array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch(
          "https://portfolio-backend-09r1.onrender.com/api/admin/messages",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch messages");
        }

        setMessages(data.messages || []); // ✅ fallback
      } catch (err) {
        console.error(err);
        setError("Unauthorized or server error");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  if (loading) return <p>Loading messages...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "40px" }}>
      <h2>Admin Dashboard</h2>

      <button onClick={handleLogout} style={{ marginBottom: "20px" }}>
        Logout
      </button>

      <h3>Total Messages: {messages.length}</h3>

      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        messages.map((msg) => (
          <div
            key={msg._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "6px"
            }}
          >
            <p><strong>Name:</strong> {msg.name}</p>
            <p><strong>Email:</strong> {msg.email}</p>
            <p><strong>Message:</strong> {msg.message}</p>
            <small>
              {new Date(msg.createdAt).toLocaleString()}
            </small>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminDashboard;
