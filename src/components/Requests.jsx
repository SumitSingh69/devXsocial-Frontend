import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestsSlice";
import ReqCard from "./ReqCard";
function Requests() {
  const requests = useSelector((store) => store.requests);
  console.log(requests);
  const dispatch = useDispatch();
  const reviewRequests = async (status, reqId) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/review/${status}/${reqId}`,
        null,
        { withCredentials: true }
      );
      dispatch(removeRequest(reqId));
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const getRequests = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/requests/recieved`, {
        withCredentials: true,
        headers: { "Cache-Control": "no-cache" },
        params: { _ts: Date.now() }, // cache buster
      });
      console.log(res);
      dispatch(addRequest(res.data.recievedRequests));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getRequests();
  }, []);

  return requests.map((request, index) => {
    return (
      <ReqCard key={index} request={request} reviewRequests={reviewRequests} />
    );
  });
}

export default Requests;
