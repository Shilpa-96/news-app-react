import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./components/News";

function App() {
  const pageSize = 12;
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <News
              apiKey="a3ee016ca53040d2860a9c34be49f7f3"
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          }
        ></Route>
        <Route
          path="/business"
          element={
            <News
              apiKey="a3ee016ca53040d2860a9c34be49f7f3"
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          }
        ></Route>
        <Route
          path="/entertainment"
          element={
            <News
              apiKey="a3ee016ca53040d2860a9c34be49f7f3"
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          }
        ></Route>
        <Route
          path="/general"
          element={
            <News
              apiKey="a3ee016ca53040d2860a9c34be49f7f3"
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          }
        ></Route>
        <Route
          path="/health"
          element={
            <News
              apiKey="a3ee016ca53040d2860a9c34be49f7f3"
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          }
        ></Route>
        <Route
          path="/science"
          element={
            <News
              apiKey="a3ee016ca53040d2860a9c34be49f7f3"
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          }
        ></Route>
        <Route
          path="/sports"
          element={
            <News
              apiKey="a3ee016ca53040d2860a9c34be49f7f3"
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          }
        ></Route>
        <Route
          path="/technology"
          element={
            <News
              apiKey="a3ee016ca53040d2860a9c34be49f7f3"
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
