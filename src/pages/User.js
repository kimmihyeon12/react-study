import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import UserList from "../components/UserList";
import Spnner from "../components/Spnner";
import { useParams } from "react-router-dom";
function User() {
  const [user, setUser] = useState(null);
  const [loading, setLoding] = useState(true);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
        setLoding(false);
      });
  }, []);
  const userDetail = loading ? (
    <Spnner />
  ) : (
    <div>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.phone}</div>
    </div>
  );
  return (
    <>
      <h1>user 정보</h1>
      {userDetail}
    </>
  );
}
export default User;
