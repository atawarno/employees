import './app.css';
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

function App(){

    const dataFromServer = [
        { name: 'John D.', salary: 800, increase: false, id: 1},
        { name: 'Max S.', salary: 3000, increase: true, id: 2},
        { name: 'Steven H.', salary: 1800, increase: false, id: 3},
    ];

    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={dataFromServer}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;