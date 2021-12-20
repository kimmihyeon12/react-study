import { Link } from "react-router-dom";
function UserList({ users }) {
  return (
    <div className="">
      {users.map((user) => {
        return (
          <div className="border p-2 mr-2 mb-2" key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
export default UserList;
