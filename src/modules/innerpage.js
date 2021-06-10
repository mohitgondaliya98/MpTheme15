import React from 'react';
import TextField from '@material-ui/core/TextField';
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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';

import Input from '@material-ui/core/Input';

class Innerpage extends React.Component {


    removeAlert(e) {
        e.preventDefault();
        e.target.closest('div.alert').remove();
    }
    componentDidMount() {
        document.title = "Innerpage | Theme 15"
    }

    render() {

        return (
            <>
                <main className="main-content">
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
                    <div className="box-card  form-element">
                        <h6 className="card-title bb-0">Form Elements</h6>
                        <div className="field-col">
                            <FormControl className="form-control" fullWidth>
                                <TextField type="text" label="Name" />
                            </FormControl>
                            <FormControl className="form-control" fullWidth>
                                <TextField type="text" label="Textarea" multiline rowsMax={4} rows={3} />
                            </FormControl>
                            <DropDown></DropDown>
                        </div>

                        <h6 className="card-title bb-0">Two Column</h6>
                        <div className="row field-col">
                            <div className="col-sm-6">
                                <FormControl className="form-control" fullWidth>
                                    <TextField type="text" label="Name" />
                                </FormControl>
                            </div>
                            <div className="col-sm-6">
                                <FormControl className="form-control" fullWidth>
                                    <TextField type="text" label="Name" />
                                </FormControl>
                            </div>
                            <div className="col-sm-6">
                                <DropDown></DropDown>
                            </div>
                            <div className="col-sm-6">
                                <DropDown></DropDown>
                            </div>
                        </div>


                        <h6 className="card-title bb-0">Three Column</h6>
                        <div className="row field-col">
                            <div className="col-sm-4">
                                <FormControl className="form-control" fullWidth>
                                    <TextField type="text" label="Name" />
                                </FormControl>
                            </div>
                            <div className="col-sm-4">
                                <FormControl className="form-control" fullWidth>
                                    <TextField type="text" label="Name" />
                                </FormControl>
                            </div>
                            <div className="col-sm-4">
                                <FormControl className="form-control" fullWidth>
                                    <TextField type="text" label="Name" />
                                </FormControl>
                            </div>
                            <div className="col-sm-4">
                                <DropDown></DropDown>
                            </div>
                            <div className="col-sm-4">
                                <DropDown></DropDown>
                            </div>
                            <div className="col-sm-4">
                                <DropDown></DropDown>
                            </div>
                        </div>

                        <h6 className="card-title bb-0">Other Form Element</h6>
                        <div className="row field-col">
                            <div className="col-sm-4">
                                <DropDown></DropDown>
                            </div>
                        </div>

                        <div className="field-col check-group">
                            <label>Checkbox</label>
                            <div>
                                <FormControlLabel control={<Checkbox className="primary-check" color="primary" />} label="Option 1" />
                                <FormControlLabel control={<Checkbox className="primary-check" color="primary" />} label="Option 2" />
                                <FormControlLabel control={<Checkbox className="primary-check" color="primary" />} label="Option 3" />
                            </div>
                            {/* <CheckBox></CheckBox> */}
                        </div>

                        <div className="field-col radio-group">
                            <label>Radio</label>
                            <div>
                                <RadioGroup className="inline" aria-label="gender" name="gender1" >
                                    <FormControlLabel value="option1" control={<Radio className="primary-radio" color="primary" />} label="Option 1" />
                                    <FormControlLabel value="option2" control={<Radio className="primary-radio" color="primary" />} label="Option 2" />
                                    <FormControlLabel value="option3" control={<Radio className="primary-radio" color="primary" />} label="Option 3" />
                                </RadioGroup>
                            </div>
                        </div>
                        <div className="btn-group">
                            <Button className="btn btn-primary" variant="contained" color="primary" title="Select">Select</Button>
                            <Button className="btn btn-outline" variant="outlined" title="Cancel">Cancel</Button>
                        </div>


                        <h6 className="card-title bb-0">Left Side Label</h6>
                        <div className="left-labeled-form row mb-0">
                            <div className="col-auto">
                                <label className="formlabel">Name</label>
                            </div>
                            <div className="col">
                                <Input placeholder="Name" inputProps={{ 'aria-label': 'description' }} />
                            </div>
                        </div>
                        <div className="left-labeled-form row">
                            <div className="col-auto">
                                <label className="formlabel pt-3 mt-1">Dropdown</label>
                            </div>
                            <div className="col">
                                <DropDown></DropDown>
                            </div>
                        </div>
                        <div className="left-labeled-form row">
                            <div className="col-auto">
                                <label className="formlabel">Disable</label>
                            </div>
                            <div className="col">
                                <Input defaultValue="Disabled" disabled inputProps={{ 'aria-label': 'description' }} />
                            </div>
                        </div>
                        <div className="alert-group">
                            <Alert icon={false} className="alert" severity="success"><img src={require('../assets/images/success-message-sign.svg')} alt="alert" />This is a success message.<Fab onClick={this.removeAlert} className="action-btn"><span>&#10005;</span></Fab></Alert>
                            <Alert icon={false} className="alert" severity="info"><img src={require('../assets/images/info-message-icon.svg')} alt="alert" />This is an info message.<Fab onClick={this.removeAlert} className="action-btn"><span>&#10005;</span></Fab></Alert>
                            <Alert icon={false} className="alert" severity="warning"><img src={require('../assets/images/alert-message-icon.svg')} alt="alert" />This is a warning message.<Fab onClick={this.removeAlert} className="action-btn"><span>&#10005;</span></Fab></Alert>
                            <Alert icon={false} className="alert" severity="error"><img src={require('../assets/images/error-message-icon.svg')} alt="alert" />This is a danger message.<Fab onClick={this.removeAlert} className="action-btn"><span>&#10005;</span></Fab></Alert>
                        </div>
                    </div>
                    <div className="box-card form-element mb-3">
                        <h6 className="card-title bb-0">Tabs</h6>
                        <div className="primary-tabs">
                            <TabGroup></TabGroup>
                        </div>
                    </div>
                </main>
            </>
        );
    }
}

// function CheckBox() {
//     const [state, setState] = React.useState({});

//     const handleChange = (event) => {
//         setState({ ...state, [event.target.name]: event.target.checked });
//     };

//     const labelList = [{name: 'option1'}, {name: 'option2'}, {name: 'option3'}]; // your data

//     return (
//         <>
//         {this.labelList.map(Element => (
//             <FormControlLabel
//                 control={
//                     <Checkbox
//                         checked={this.state}
//                         onChange={handleChange}
//                         name="{labelList.name}"
//                         color="primary"
//                     />
//                 }
//                 label="{labelList.name}"
//             />
//         ))};
//         </>
//     );
// }

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function TabGroup() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Active" {...a11yProps(0)} />
                <Tab label="Inactive" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Sociis natoque penatibus et magnis dis parturient montes. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. In est ante in nibh mauris cursus mattis molestie a. Netus et malesuada fames ac turpis egestas maecenas pharetra. Egestas quis ipsum suspendisse ultrices gravida. Neque aliquam vestibulum morbi blandit. Risus at ultrices mi tempus imperdiet nulla. Libero id faucibus nisl tincidunt eget nullam non nisi. Porta nibh venenatis cras sed felis. Enim nunc faucibus a pellentesque. Interdum velit laoreet id donec ultrices tincidunt arcu. Fermentum leo vel orci porta non pulvinar neque laoreet. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Tristique senectus et netus et malesuada fames ac.</TabPanel>
            <TabPanel value={value} index={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Sociis natoque penatibus et magnis dis parturient montes. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. In est ante in nibh mauris cursus mattis molestie a. Netus et malesuada fames ac turpis egestas maecenas pharetra. Egestas quis ipsum suspendisse ultrices gravida. Neque aliquam vestibulum morbi blandit. Risus at ultrices mi tempus imperdiet nulla. Libero id faucibus nisl tincidunt eget nullam non nisi. Porta nibh venenatis cras sed felis. Enim nunc faucibus a pellentesque. Interdum velit laoreet id donec ultrices tincidunt arcu. Fermentum leo vel orci porta non pulvinar neque laoreet.fames ac.</TabPanel>
        </>
    );
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

function DropDown() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <FormControl className="form-control select-menu">
            <InputLabel id="simple-select">Dropdown</InputLabel>
            <Select
                labelId="simple-select"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
            >
                <MenuItem value={10}>Option 1</MenuItem>
                <MenuItem value={20}>Option 2</MenuItem>
                <MenuItem value={30}>Option 3</MenuItem>
                <MenuItem value={40}>Option 4</MenuItem>
                <MenuItem value={50}>Option 5</MenuItem>
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


export default Innerpage;
