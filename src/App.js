import "./App.css";
import users from "./users";
import Header from "./features/layout/Header";
import UsersList from "./features/users/UsersList";
import { useState, userEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import SingleUser from "./features/users/SingleUser";

function App() {
  const [usersArr, setUsersArr] = useState(users);
  const filteredArr = (searchValue) => {
    setUsersArr(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header filteredArr={filteredArr} />
        <main className="container">
          <Routes>
            <Route path="/" element={<UsersList usersArr={usersArr} />} />
            <Route
              path="/:userId"
              element={<SingleUser usersArr={usersArr} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
