import React from "react";

function ConnectionCard({ connection }) {
  if (!connection) return null;
  return (
    <div className="card bg-slate-600 w-96 shadow-sm m-6">
      <figure className="px-10 pt-10">
        <img src={connection.photoUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{`${connection.firstName} ${
          connection.midName || ""
        } ${connection.lastName}`}</h2>
        <h4>{`${connection.age} , ${connection.gender}`}</h4>
      </div>
    </div>
  );
}

export default ConnectionCard;
