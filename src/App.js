import { useState } from "react";
import "./App.css";
import { MyForm } from "./Components/MyForm";
import { Table } from "./Components/Table";

function App() {
  const [userlist, setUserList] = useState([]);
  const addUser = (userObj) => {
    setUserList([...userlist, userObj]);
  };
  return (
    <div className="container mt-3">
      <MyForm addUser={addUser} />
      <Table userlist={userlist} />
    </div>
  );
}

export default App;
