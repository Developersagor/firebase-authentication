import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Profile = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  // console.log(user.email);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      alert("Logout Succesfull");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "10rem",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2>Welcome to profile</h2>
      </div>
      {user?.email && (
        <>
          <h2>User Email:{user.email}</h2>
          <button onClick={handleLogout} style={{ marginTop: "1rem" }}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default Profile;
