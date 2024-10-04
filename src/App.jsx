import { useState } from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import NewUser from "./components/NewUser";
import AddUserForm from "./components/AddUserForm";

function App() {
  const [usersData, setUsersData] = useState([]);
  const [error, setError] = useState(null); // Use null to represent no error

  const handleAddUser = (username, age) => {
    if (!username || age <= 0 || !age) {
      setError("Invalid input");
      return;
    }

    const newUser = { username, age, id: Math.random() };
    setUsersData((prevUsers) => [...prevUsers, newUser]);
    setError(null); // Reset error if input is valid
  };

  const handleDismissError = () => {
    setError(null); // Dismiss the error
  };

  return (
    <>
      <AddUserForm handleAddUser={handleAddUser} />
      {usersData.length > 0 && <NewUser usersData={usersData} />}
      {error && <ErrorMessage message={error} onDismiss={handleDismissError} />} {/* Pass dismiss function */}
    </>
  );
}

export default App;
