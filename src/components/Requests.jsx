import React, {useEffect} from 'react'
import axios from 'axios';
import { BASE_URL} from '../utils/constants';
function Requests() {
    const getRequests = async () => {
        try{
            const res = await axios.get(BASE_URL + "/user/requests/recieved", {
                withCredentials: true
            });
            console.log(res.data.recievedRequests);
        }catch(err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getRequests();
    })

  return (
    <div>Requests</div>
  )
}

export default Requests