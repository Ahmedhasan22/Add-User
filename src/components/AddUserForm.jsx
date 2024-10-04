import React, { useState } from "react";
import classes from "./AddUserForm.module.css";
const AddUserForm = ({ handleAddUser }) => {
  // Add user logic here
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add user to your data source
    console.log("User added:", user, age);

    handleAddUser(user, age);
  };
  const handleChange = (e) => {
    if (e.target.name == "name") {
      setUser(e.target.value.trim());
    } else if (e.target.name == "age") {
      setAge(e.target.value.trim());
    }
  };
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="name" className={classes.label}>
        Username:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        className={classes.input}
      />

      <label htmlFor="age" className={classes.label}>
        Age(Years):
      </label>
      <input
        type="number"
        id="age"
        name="age"
        onChange={handleChange}
        className={classes.input}
      />

      <button type="submit" className={classes.button}>
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
