import Accordion from "./Components/Accordion/Accordion";
import { Search } from "./Components/Search/Search";
import data from "./data/celebrities.json";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [deletedUserIds, setDeletedUserIds] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const storedDeletedUserIds = JSON.parse(
      localStorage.getItem("deletedUserIds")
    );
    setDeletedUserIds(storedDeletedUserIds || []);

    const storedUserData = JSON.parse(localStorage.getItem("userData")) || [];
    const filteredUserData = storedUserData.filter((user) => user !== null);
    setUserData(filteredUserData);
  }, []);

  const handleUserDelete = (userId) => {
    const newDeletedUserIds = [...deletedUserIds, userId];
    setDeletedUserIds(newDeletedUserIds);
    localStorage.setItem("deletedUserIds", JSON.stringify(newDeletedUserIds));
  };

  // const activeUsers =
  //   deletedUserIds.length > 0
  //     ? data.filter((item) => !deletedUserIds.includes(item.id))
  //     : data;

  const activeUsers = [...data, ...userData].filter(
    (item) => !deletedUserIds.includes(item.id)
  );

  return (
    <div className="App">
      <Search data={data} />
      {activeUsers.map((item) => (
        <Accordion key={item.id} user={item} onDelete={handleUserDelete} />
      ))}
    </div>
  );
}

export default App;
