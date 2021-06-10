import React from 'react';
import { NavLink } from 'react-router-dom';

class Errorpage extends React.Component {
    render() {
        return (
            <>
                {/* Start Errorpage */}
                <div className="error-wrapper">
                    <div className="errorpage">
                        <img src={require('../../assets/images/error-404.svg')} alt="error" />
                        <NavLink to={`${process.env.PUBLIC_URL}/`} exact className="back-to-last"><u>Back to Login</u></NavLink>
                    </div>
                </div>
                {/* End Errorpage */}
            </>
        )
    }
}

export default Errorpage;
