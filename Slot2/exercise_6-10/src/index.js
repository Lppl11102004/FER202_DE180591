import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Các component bạn muốn sử dụng
import PersonDetails from "./PersonDetails";
import PeopleList from "./PeopleList";
import PeopleTable from "./PeopleTable";
import FirstTeenager from "./FirstTeenager";
import AreAllTeenagers from "./AreAllTeenagers";
import SortPeople from "./SortPeople";
import GroupByOccupation from "./GroupByOccupation";
import OldestYoungest from "./OldestYoungest";
import AverageAgeByOccupation from "./AverageAgeByOccupation";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    <PersonDetails />
    <PeopleList />
    <PeopleTable />
    <FirstTeenager />
    <AreAllTeenagers />
    <SortPeople />
    <GroupByOccupation />
    <OldestYoungest />
    <AverageAgeByOccupation />
  </React.StrictMode>
);

reportWebVitals();