import { useState } from "react";

const UserCard = ({ user }) => {
  const [emailVisibility, setEmailVisibility] = useState(false);
  return (
    <>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <img src={user.picture.large} style={{ borderRadius: "50%" }} />
        <h2>
          {user.name.first} {user.name.last}
        </h2>
        <p>
          Age: {user.dob.age} {user.dob.age >= 18 ? "Adult" : "Minor"}
        </p>
        <p>Location: {user.location.city}</p>
        <button onClick={() => setEmailVisibility(!emailVisibility)}>
          {emailVisibility ? "Hide Email" : "Show Email"}
        </button>
        {emailVisibility && <p>Email: {user.email}</p>}
      </div>
    </>
  );
};

export default UserCard;
