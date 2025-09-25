import React from "react";

function ConnectionCard({ request, reviewRequests }) {
  if (!request) return null;
  console.log(request);
  return (
    <div className="card bg-slate-600 w-96 shadow-sm m-6">
      <figure className="px-10 pt-10">
        <img
          src={request.fromUserId.photoUrl}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{`${request.fromUserId.firstName} ${
          request.fromUserId.midName || ""
        } ${request.fromUserId.lastName}`}</h2>
        <h4>{`${request.fromUserId.age} , ${request.fromUserId.gender}`}</h4>
        <p>{request.fromUserId.about}</p>

        <div className="card-actions">
          <button
            className="btn btn-primary bg-red-500"
            onClick={() => reviewRequests("rejected", request._id)}
          >
            Reject
          </button>
          <button
            className="btn btn-primary bg-blue-500"
            onClick={() => reviewRequests("accepted", request._id)}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConnectionCard;
