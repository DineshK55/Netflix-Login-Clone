import { useNavigate } from "react-router-dom";

import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const handleLogout = () => {
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <h1>Welcome</h1>

        <h2>{user.name}</h2>

        <p>{user.email}</p>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;