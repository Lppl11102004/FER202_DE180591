import './App.css';
import EmployeeDetails from './EmployeeDetails';
import EmployeeList from "./EmployeeList"; 
import EmployeeTable from "./EmployeeTable";
import AverageAge from "./AverageAge";
import EmployeeDropdown from "./EmployeeDropdown";
import ITEmployeeList from "./ITEmployeeList";
import SortedEmployeeList from "./SortedEmployeeList";
import GroupedEmployeeList from "./GroupedEmployeeList";
import CheckTeenageEmployee from "./CheckTeenageEmployee";
import EmployeeSearch from "./EmployeeSearch";
function App() {
  return (
    <div className="App">
       <h1>Exercise 1 </h1>
      <EmployeeDetails />

      <h1>Exercise 2 </h1>
       <EmployeeList />

       <h1>Exercise 3 </h1>
       <EmployeeTable />

       <h1>Exercise 4 </h1>
        <AverageAge />

       <h1>Exercise 5 </h1>
       <EmployeeDropdown />
        <h1>Exercise 6 </h1>
        <ITEmployeeList />
       <h1>Exercise 7 </h1>
        <SortedEmployeeList />
        <h1>Exercise 8 </h1>
        <GroupedEmployeeList />
        <h1>Exercise 9 </h1>
        <CheckTeenageEmployee />
        <h1>Exercise 10 </h1>
         <EmployeeSearch />
    </div>
  );
}

export default App;