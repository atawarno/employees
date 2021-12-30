import { Component } from "react";

import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dataFromServer: [
                { name: 'John D.', salary: 800, increase: false, id: 1},
                { name: 'Max S.', salary: 3000, increase: true, id: 2},
                { name: 'Steven H.', salary: 1800, increase: false, id: 3},
            ],
        }
    }

    deleteItem = (id) => {
        this.setState(({dataFromServer}) => {
            const index = dataFromServer.findIndex(elem => elem.id === id);
            console.log(index);
        })
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList
                    data={this.state.dataFromServer}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm/>
            </div>
        );
    }
}

export default App;