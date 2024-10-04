import React from "react";
import classes from './NewUser.module.css'
const NewUser = ({ usersData }) => {
//   console.log(usersData);
  return usersData.map((user) => {
    const { username, age, id } = user;
    return (
      <div key={id}  className={classes.newUser}>
        <input type="text" value={`${username} (${age} years old) `} disabled  className={classes.input}/>
      </div>
    );
  });
};

export default NewUser;
