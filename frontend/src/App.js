import * as React from "react";

import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

import UpdateProject from "./Components/Projects/ProjectCRUD/UpdateProject";
import UserProjects from "./Components/Projects/ProjectCRUD/UserProjects";
import AddProject from "./Components/Projects/ProjectCRUD/AddProject";
import ProjectsPath from "./Components/Projects/ProjectsPaths";
import Projects from "./Components/Projects/AllProjects";
import Scrollup from "./Components/Scrollup";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

import "./App.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState(false);
  const [request, setRequest] = useState(0);
  const [login, setLogin] = useState(false);
  const [dark, setDark] = useState(true);

  return (
    <div
      className="app"
      style={{ backgroundColor: dark ? "#e0eff5" : "#00468B" }}
    >
      <Nav
        dark={dark}
        setDark={setDark}
        request={request}
        login={login}
        setLogin={setLogin}
        search={search}
        setSearch={setSearch}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home dark={dark} />} />
        <Route
          exact
          path="/signin"
          element={<Signin dark={dark} setLogin={setLogin} login={login} />}
        />
        <Route exact path="/signup" element={<Signup dark={dark} />} />
        <Route exact path="/projects" element={<ProjectsPath />} />
        <Route
          exact
          path="/projects/:type"
          element={
            <Projects
              setRequest={setRequest}
              request={request}
              setSearch={setSearch}
              search={search}
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
            />
          }
        />
        <Route
          exact
          path="/myprojects"
          element={<UserProjects dark={dark} setDark={setDark} />}
        />
        <Route
          exact
          path="/myprojects/add"
          element={<AddProject dark={dark} />}
        />
        <Route
          exact
          path="/myprojects/edit/:id"
          element={<UpdateProject dark={dark} />}
        />
      </Routes>
      <Scrollup />
      <Footer dark={dark} />
    </div>
  );
}
