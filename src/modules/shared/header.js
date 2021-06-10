import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showHeader: false,
            prevPath: ''
        }
    }

    toggle_menu() {
        if (document.body.classList.contains("show")) {
            document.body.classList.remove("show");
        }
        else {
            document.body.classList.add("show");
        }
    };
    removeAll() {
        document.body.classList.toggle("show");
    }
    removeShow() {
        document.body.classList.remove("show");
    }
    componentDidMount() {
        // document.body.classList.remove("show");
        document.body.classList.add("show");
        if (this.state.prevPath !== this.props.location.pathname) {
            this.setState({
                prevPath: this.props.location.pathname
            });
            this.decideLayout();
        }
    }
    componentDidUpdate() {
        if (this.state.prevPath !== this.props.location.pathname) {
            this.setState({
                prevPath: this.props.location.pathname
            });
            window.scrollTo(0, 0);
            this.decideLayout();
            this.removeShow();
        }
    }
    decideLayout() {
        let path = this.props.location.pathname.split("/").pop();
        if (path === "" || path === "error") {
            this.setState({
                showHeader: false
            });
        } else {
            this.setState({
                showHeader: true
            });
        }
    }
    render() {
        // var currentRouteName = this.props.location.pathname.split("/").pop();
        var headerHTML = (
            <>
                {/* Start Header */}
                <header className="header">
                    <Fab className="menu-btn" onClick={this.toggle_menu}>
                        <img src={require('../../assets/images/menu.svg')} alt="login" />
                    </Fab>
                    <div className="row main-header">
                        <a href="#12" className="logo pl-0 pr-0 col-auto mt-lg-1">
                            <img className="d-lg-block d-none" src={require('../../assets/images/logo.png')} alt="logo" />
                            <img className="d-lg-none" src={require('../../assets/images/logo-circlr.svg')} alt="logo" />
                        </a>
                        <div className="col-auto pl-0 order-sm-2 pr-lg-3 pr-0">
                            <NotificationMenu></NotificationMenu>
                            <UserMenu></UserMenu>
                        </div>
                        <div className="col-sm order-sm-1">
                            <FormControl className="form-control header-search" fullWidth>
                                <Input placeholder="Search..." type="text" />
                            </FormControl>
                        </div>
                    </div>
                    <div className="overlayer" onClick={this.removeAll}></div>
                </header>
                {/* End Header */}
            </>
        );
        if (!this.state.showHeader) {
            headerHTML = "";
        }
        return headerHTML;
    }
}


function UserMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Fab className="user-btn" aria-controls="user-menu" aria-haspopup="true" onClick={handleClick}>
                <img src={require('../../assets/images/user-profile.svg')} alt="Notification" />
            </Fab>
            <Menu
                id="user-menu"
                className="user-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><NavLink exact to={`${process.env.PUBLIC_URL}/error`} href="#1"><img src={require('../../assets/images/user.svg')} alt="My Profile" />My Profile</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink exact to={`${process.env.PUBLIC_URL}/error`} href="#1"><img src={require('../../assets/images/help-icon.svg')} alt="Help" />Help</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink exact to={`${process.env.PUBLIC_URL}/`} href="#1"><img src={require('../../assets/images/logout.svg')} alt="Logout" />Logout</NavLink></MenuItem>
            </Menu>
        </>
    );
}


function NotificationMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Fab className="notification-btn" aria-controls="Notification" aria-haspopup="true" onClick={handleClick}>
                <img src={require('../../assets/images/notification-bell.svg')} alt="Notification" />
            </Fab>
            <Menu
                id="Notification"
                className="notification-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem className="notification-header">
                    Notification
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ul className="all-notification">
                        <li>
                            <a href="#2" className="notification">
                                <img src={require('../../assets/images/user-profile.svg')} alt="Notification" />
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                                <p>10 min ago</p>
                            </a>
                        </li>
                        <li>
                            <a href="#2" className="notification">
                                <img src={require('../../assets/images/user-profile.svg')} alt="Notification" />
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                                <p>10 min ago</p>
                            </a>
                        </li>
                        <li>
                            <a href="#2" className="notification">
                                <img src={require('../../assets/images/user-profile.svg')} alt="Notification" />
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                                <p>10 min ago</p>
                            </a>
                        </li>
                        <li>
                            <a href="#2" className="notification">
                                <img src={require('../../assets/images/user-profile.svg')} alt="Notification" />
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                                <p>10 min ago</p>
                            </a>
                        </li>
                        <li>
                            <a href="#2" className="notification">
                                <img src={require('../../assets/images/user-profile.svg')} alt="Notification" />
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                                <p>10 min ago</p>
                            </a>
                        </li>
                        <li>
                            <a href="#2" className="notification">
                                <img src={require('../../assets/images/user-profile.svg')} alt="Notification" />
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                                <p>10 min ago</p>
                            </a>
                        </li>
                    </ul>
                </MenuItem>
                <MenuItem className="notification-footer">
                    View All Notification
                </MenuItem>
            </Menu>
        </>
    );
}
export default withRouter(Header);
