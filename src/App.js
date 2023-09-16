import Accordion from "./Components/Accordion/Accordion";
import { Search } from "./Components/Search/Search";
import data from "./data/celebrities.json";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [deletedUserIds, setDeletedUserIds] = useState([]);
  const [userData, setUserData] = useState([]);
  const [newDataAfterFilter, setNewDataAfterFilter] = useState([]);

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
  const mergedNameData = data.map((item) => {
    return { ...item, fullName: item.first + " " + item.last };
  });

  const mergedData = mergedNameData.map((item) => {
    const userDataItem = userData.find((user) => user.id === item.id);
    return userDataItem ? { ...item, ...userDataItem } : item;
  });
  const activeUsers = mergedData.filter(
    (item) => !deletedUserIds.includes(item.id)
  );
  const filteredData = (newdata) => {
    setNewDataAfterFilter(newdata);
  };
  return (
    <div className="App">
      <Search data={activeUsers} filteredData={filteredData} />
      {newDataAfterFilter.map((item) => (
        <Accordion key={item.id} user={item} onDelete={handleUserDelete} />
      ))}
    </div>
  );
}

export default App;
