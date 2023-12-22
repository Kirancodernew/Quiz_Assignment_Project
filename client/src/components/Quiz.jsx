import React, { useState } from "react";
import Questions from "./Questions";
import { useGlobalContext } from "../store/auth";
const Quiz = () => {
  const [userData,setUserData]=useState({
    userName:"",
    status:true
  });
  console.log(userData.userName);
  const {user}=useGlobalContext();
  if(userData.status && user){
    setUserData({userName:user.username,status:false});
    // console.log(userData.userName);
  }
  return (
    <form>
      <div className="container">
        <h1 className="title">Quiz Application</h1>

        {/* display questions */}
        <Questions />
      </div>
    </form>
  );
};

export default Quiz;
