import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';


class Sidebar extends React.Component {
    toggle_menu() {
        document.body.classList.toggle("show");
    };
    constructor(props) {
        super(props);
        this.state = {
            showSidebar: false,
            prevPath: ''
        }
    }

    removeAll() {
        document.body.classList.toggle("show");
    }

    componentDidMount() {
        document.body.classList.remove("show");
        if (this.state.prevPath !== this.props.location.pathname) {
            this.setState({
                pathname: this.props.location.pathname
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
        }
    }

    decideLayout() {
        let path = this.props.location.pathname.split("/").pop();
        if (path === "" || path === "error") {
            this.setState({
                showSidebar: false
            });
        } else {
            this.setState({
                showSidebar: true
            });
        }
    }
    render() {
         const routes = [
             {
                 name: 'Dashboard',
                 path: `${process.env.PUBLIC_URL}/dashboard`,
                 image: 'dash-icon.svg'
             },
             {
                 name: 'Calandar',
                 path: `${process.env.PUBLIC_URL}/error`,
                 image: 'calendar-icon.svg'
             },
             {
                 name: 'Folder',
                 path: `${process.env.PUBLIC_URL}/error`,
                 image: 'folder-icon.svg'
             },
             {
                 name: 'Analytics',
                 path: `${process.env.PUBLIC_URL}/error`,
                 image: 'analytics-icon.svg'
             },
             {
                 name: 'Pages',
                 path: `${process.env.PUBLIC_URL}/innerpage`,
                 image: 'pages-icon.svg'
             },
             {
                 name: 'Mailbox',
                 path: `${process.env.PUBLIC_URL}/error`,
                 image: 'mailbox-icon.svg'
             },
             {
                 name: 'Documents',
                 path: `${process.env.PUBLIC_URL}/error`,
                 image: 'Documents-icon.svg'
             },
             {
                name: 'Statements',
                path: `${process.env.PUBLIC_URL}/error`,
                image: 'statements-icon.svg'
            }
         ]

        var SidebarHTML = (
            <>
                {/* Start sidebar */}
                <aside className="sidebar" id="menu-click">

                    {/* Start Main Navigation */}

                    <div className="header-buttons">
                        <Fab className="notification-btn" aria-controls="Notification" aria-haspopup="true">
                            <img src={require('../../assets/images/chats-icon.svg')} alt="Notification" />
                        </Fab>
                        <Fab className="notification-btn" aria-controls="Notification" aria-haspopup="true">
                            <img src={require('../../assets/images/message-icon.svg')} alt="Notification" />
                        </Fab>
                        <Fab className="notification-btn" aria-controls="Notification" aria-haspopup="true">
                            <img src={require('../../assets/images/chats-icon.svg')} alt="Notification" />
                        </Fab>
                    </div>

                    <ul className="main-navigation">
                        {routes.map((route) =>
                            <li key={route.name}>
                                <NavLink exact to={route.path} className="nav-item" activeClassName="active" title={route.name} >
                                    <i className="nav-icon"><img src={require('../../assets/images/' + route.image)} alt="" /></i>
                                    {route.name}
                                </NavLink>
                            </li>
                        )}
                    </ul>
                    {/* End Main Navigation */}

                </aside>
                {/* End sidebar */}
            </>
        );

        if (!this.state.showSidebar) {
            SidebarHTML = "";
        }
        return SidebarHTML;
    }
}

export default withRouter(Sidebar);
