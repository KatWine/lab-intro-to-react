import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";



function App() {
  return (
    <>
  <NavBar />
  <main className="container">
    <UserProfile />
    <Posts />
    <Contacts />
  </main>

  </>
  )
}

export default App;
