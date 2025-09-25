import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestsSlice";
import ReqCard from "./ReqCard";
function Requests() {
  const requests = useSelector((store) => store.requests);
  console.log(requests);
  const dispatch = useDispatch();
  const getRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/recieved", {
        withCredentials: true,
      });
      console.log(res.data.recievedRequests);
      dispatch(addRequest(res.data.recievedRequests));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getRequests();
  }, []);

  return requests.map((request, index) => {
    return <ReqCard key={index} request={request.fromUserId} />;
  });
}

export default Requests;
