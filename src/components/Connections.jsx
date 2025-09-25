import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addConnection } from "../utils/connectionSlice";
function Connections() {
  const fetchConnections = async () => {
    const dispatch = useDispatch();
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

  useEffect(() => {
    fetchConnections();
  }, []);
  return <div>Connections</div>;
}

export default Connections;
