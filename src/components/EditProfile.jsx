import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

function EditProfile({ user }) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [midName, setMidName] = useState(user.midName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const handleSave = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/update",
        {
          firstName,
          lastName,
          midName,
          age,
          gender,
          about,
          photoUrl,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res?.data?.user));
      console.log(res?.data?.user);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="mt-30 flex  w-full justify-center items-center">
      <div className="card w-96 bg-slate-600 shadow-sm">
        <div className="card-body">
          <label htmlFor="firstName">first name</label>
          <input
            type="text"
            value={firstName}
            className="input"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="midName">mid name</label>
          <input
            type="text"
            value={midName}
            className="input"
            onChange={(e) => setMidName(e.target.value)}
          />
          <label htmlFor="lastName">last name</label>
          <input
            type="text"
            value={lastName}
            className="input"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="age">age</label>
          <input
            type="text"
            value={age}
            className="input"
            onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor="gender">gender</label>
          <input
            type="text"
            value={gender}
            className="input"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="about">about</label>
          <input
            type="text"
            value={about}
            className="input"
            onChange={(e) => setAbout(e.target.value)}
          />
          <label htmlFor="photoUrl">photo url</label>
          <input
            type="text"
            value={photoUrl}
            className="input"
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
          <p className="text-red-400">{error}</p>
          <div className="mt-6">
            <button className="btn btn-primary btn-block" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
