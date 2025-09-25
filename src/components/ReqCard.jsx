import React from "react";

function ConnectionCard({ request }) {
  if (!request) return null;
  console.log(request);
  return (
    <div className="card bg-slate-600 w-96 shadow-sm m-6">
      <figure className="px-10 pt-10">
        <img src={request.photoUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{`${request.firstName} ${
          request.midName || ""
        } ${request.lastName}`}</h2>
        <h4>{`${request.age} , ${request.gender}`}</h4>
        <p>{request.about}</p>

        <div className="card-actions">
          <button className="btn btn-primary bg-red-500">Reject</button>
          <button className="btn btn-primary bg-blue-500">Accept</button>
        </div>
      </div>
    </div>
  );
}

export default ConnectionCard;
