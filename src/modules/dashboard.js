import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Fab from '@material-ui/core/Fab';

class Dashboard extends React.Component {
    removeAlert(e) {
        e.preventDefault();
        e.target.closest('div.alert').remove();
    }
    componentDidMount() {
        document.title = "Dashboard | Theme 15"
    }
    render() {
        return (
            <>
                <main className="main-content">
                    <div className="row">
                        <div className="col-xl-7 col-lg-6">
                            <div className="box-card">
                                <h6 className="card-title">Atesthetics</h6>
                                <img className="graph" src={require('../assets/images/analytics-graph.svg')} alt="Graph" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="box-card">
                                <h6 className="card-title">Speed</h6>
                                <img className="graph" src={require('../assets/images/monthly-graph.svg')} alt="Graph" />
                            </div>
                        </div>
                    </div>
                    <div className="box-card">
                        <h6 className="card-title">Table Data</h6>
                        <div className="row px-lg-4 px-3 pb-3">
                            <div className="col-xl-3 col-md-6">
                                <SelectMenu></SelectMenu>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <SelectMenu></SelectMenu>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <SelectMenu></SelectMenu>
                            </div>
                            <div className="col-xl-3 col-md-6 pt-2 mt-2">
                                <Button className="btn btn-primary" variant="contained" color="primary" title="Select">Select</Button>
                                <Button className="btn btn-outline" variant="outlined" title="Cancel">Cancel</Button>
                            </div>
                        </div>
                        <DataTable></DataTable>
                    </div>
                </main>
            </>
        );
    }
}

function SelectMenu() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <FormControl className="form-control select-menu">
            <InputLabel id="simple-select">Route Id</InputLabel>
            <Select
                labelId="simple-select"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
            >
                <MenuItem value={10}>Route 1</MenuItem>
                <MenuItem value={20}>Route 2</MenuItem>
                <MenuItem value={30}>Route 3</MenuItem>
                <MenuItem value={40}>Route 4</MenuItem>
                <MenuItem value={50}>Route 5</MenuItem>
            </Select>
        </FormControl>
    );
}

function DataTable() {
    const columns = [
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'role', label: 'Role', minWidth: 100 },
        { id: 'task', label: 'Task', minWidth: 170 },
        { id: 'status', label: 'Status', minWidth: 100, align: 'center', },
        { id: 'action', label: 'Action', minWidth: 80, align: 'center', },
    ];
    function createData(name, role, task, status, action) {
        return { name, role, task, status, action };
    }

    const rows = [
        createData('JohnMark', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Kelvin Rok', 'Organization', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Alen Parker', 'User', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('John Mark', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Zoie Cummings', 'User', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Joy Reichel', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Braxton Jacobi', 'Organization', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Geoffrey Casper', 'User', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Carley Wunsch', 'User', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Joy Reichel', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Braxton Jacobi', 'Organization', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Geoffrey Casper', 'User', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Carley Wunsch', 'User', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Hayley Predovic', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('France', 'User', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Ashly Dickinson', 'Organization', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Theo Stanton', 'Organization', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Kyla Swift', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('John Wolff', 'User', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('JohnMark', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Kelvin Rok', 'Organization', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Alen Parker', 'User', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('John Mark', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Zoie Cummings', 'User', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Joy Reichel', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Braxton Jacobi', 'Organization', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Geoffrey Casper', 'User', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Carley Wunsch', 'User', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Hayley Predovic', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Hayley Predovic', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('France', 'User', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Ashly Dickinson', 'Organization', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Theo Stanton', 'Organization', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Kyla Swift', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('John Wolff', 'User', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('JohnMark', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Kelvin Rok', 'Organization', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Joy Reichel', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Braxton Jacobi', 'Organization', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Geoffrey Casper', 'User', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Carley Wunsch', 'User', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Hayley Predovic', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('France', 'User', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Ashly Dickinson', 'Organization', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Theo Stanton', 'Organization', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Kyla Swift', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('John Wolff', 'User', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('JohnMark', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Kelvin Rok', 'Organization', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Alen Parker', 'User', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('John Mark', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Zoie Cummings', 'User', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Joy Reichel', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Braxton Jacobi', 'Organization', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Geoffrey Casper', 'User', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Carley Wunsch', 'User', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Hayley Predovic', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Alen Parker', 'User', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('John Mark', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Zoie Cummings', 'User', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Joy Reichel', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Braxton Jacobi', 'Organization', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Geoffrey Casper', 'User', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Carley Wunsch', 'User', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Hayley Predovic', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('France', 'User', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Ashly Dickinson', 'Organization', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Theo Stanton', 'Organization', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('Kyla Swift', 'Administrator', 'Lorem ipsume dummy text', <span className="badge st-success">Active</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
        createData('John Wolff', 'User', 'Lorem ipsume dummy text', <span className="badge st-danger">Inactive</span>, <span className="action"> <Fab className="action-btn"><img src={require('../assets/images/edit-icon.svg')} alt="edit" /></Fab> <Fab className="action-btn"><img src={require('../assets/images/delete-icon.svg')} alt="edit" /></Fab></span>),
    ];


    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <Paper>
            <TableContainer className="grid-wrapper">
                <Table stickyHeader aria-label="sticky table" className="grid">
                    <TableHead className="grid-header">
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody className="grid-body">
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default Dashboard;
