import React from "react";
import EditProfile from "./EditProfile";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((store) => store.user);
  if (!user) return null;
  return (
    <div className="flex items-center justify-even">
      <EditProfile user={user} />
      <UserCard user={user} />
    </div>
  );
}

export default Profile;
