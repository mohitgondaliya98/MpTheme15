import React from 'react';
import { withRouter } from 'react-router-dom';


class Footer extends React.Component {
    toggle_menu() {
        document.body.classList.toggle("show");
    };
    removeAll() {
        document.body.classList.toggle("show");
    }
    constructor(props) {
        super(props);
        this.state = {
            showFooter: false,
            prevPath: ''
        }
    }
    componentDidMount() {
        document.body.classList.remove("show");
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
        }
    }
    decideLayout() {
        if (this.props.location.pathname === "/" || this.props.location.pathname === "/error") {
            this.setState({
                showFooter: false
            });
        } else {
            this.setState({
                showFooter: true
            });
        }
    }
    render() {
        var FooterHTML = (
            <>
                {/* Start Footer */}
                <footer className="login-footer">
                <p className="p-0">Already have an account?<a href="#1">Sign up</a></p>
            </footer>
                {/* End Footer */}
            </>
        );
        if (this.state.showFooter) {
            FooterHTML = "";
        }
        return FooterHTML;
    }
}

export default withRouter(Footer);
