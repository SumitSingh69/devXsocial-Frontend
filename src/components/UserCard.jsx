import React from "react";

function UserCard({ user }) {
  console.log(user);
  return (
    <div className="card bg-slate-600 w-96 shadow-sm m-6">
      <figure className="px-10 pt-10">
        <img src={user.photoUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{`${user.firstName} ${user.midName || ""} ${
          user.lastName
        }`}</h2>
        <h4>{`${user.age} , ${user.gender}`}</h4>
        <p>{user.about}</p>
        <div className="card-actions">
          <button className="btn btn-primary bg-red-500">Ignore</button>
          <button className="btn btn-primary bg-pink-500">Interested</button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
