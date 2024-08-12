import "./App.css";
import users from "./users";
import Header from "./features/layout/Header";
import UsersList from "./features/users/UsersList";
import { useState } from "react";

function App() {
  const [usersArr, setUsersArr] = useState(users);
  const filteredArr = (username) => {
    setUsersArr(
      users.filter((user) =>
        user.name.toLowerCase().includes(username.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <Header filteredArr={filteredArr} />
      <main className="container">
        <UsersList usersArr={usersArr} />
      </main>
    </div>
  );
}

export default App;
