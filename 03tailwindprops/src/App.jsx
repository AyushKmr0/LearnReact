import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from './components/Card'

function App() {

  const id = [101, 102, 103]

  const myObj = {
    name: "yeash",
    id: 34,
    password: "a123",
    email: "ayush@example.com"
  }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind test</h1>
      <Card username="ayush" myArr={id} object={myObj} btnText="Click me"/>
      <Card username="ayush"/>
    </>
  );
}

export default App;
