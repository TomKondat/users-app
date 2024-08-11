import "./App.css";
import users from "./users";
import Header from "./features/layout/Header";
import UsersList from "./features/users/UsersList";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <UsersList users={users} />
      </main>
    </div>
  );
}

export default App;
