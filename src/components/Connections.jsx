import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";
import ConnectionCard from "./ConnectionCard";
function Connections() {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res.data.allConnections);
      dispatch(addConnection(res.data.allConnections));
    } catch (err) {
      console.log(err);
    }
  };
  console.log(connections);
  useEffect(() => {
    fetchConnections();
  }, []);

  return connections.map((connection, index) => {
    return <ConnectionCard key={index} connection={connection} />;
  });
}

export default Connections;
