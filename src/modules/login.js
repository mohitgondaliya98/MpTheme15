import React from 'react';
import { NavLink } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Login() {

    // componentDidMount() {
    //     document.title = "Login | Theme 15"
    // }

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            {/* Login Wrapper Start */}
            <div className="wrapper login-gradiant">
                <div className="form">
                    {/* Logo */}
                    <a href="#12" className="form-header">
                        <img src={require('../assets/images/logo.png')} alt="logo" />
                    </a>

                    <div className="form-content" >
                        <h2>Login to your account</h2>
                        <form>
                            <FormControl className="form-control" fullWidth>
                                <TextField type="text" label="Email" defaultValue="mehul.patel5749@gmail.com" />
                            </FormControl>
                            <FormControl className="form-control" fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    id="password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </form>
                        <NavLink exact to={`${process.env.PUBLIC_URL}/`} onClick={handleClickOpen} className="primary-link forgot-password" title="Forgot Password?">Forgot Password?</NavLink>
                        <NavLink color="primary" aria-label="Login" exact to={`${process.env.PUBLIC_URL}/dashboard`} className="login-btn">
                            <img src={require('../assets/images/login-btn.svg')} alt="login" />
                        </NavLink>
                        <Dialog className="primary-modal" maxWidth='xs' TransitionComponent={Transition} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle className="modal-header">Forgot Password?</DialogTitle>
                            <DialogContent className="modal-body">
                                <DialogContentText>
                                    If you forgot your password then please Enter your registered email where we can send you reset password link.</DialogContentText>
                                <TextField autoFocus label="Email Address" type="email" fullWidth/>
                            </DialogContent>
                            <DialogActions className="modal-footer">
                                <Button onClick={handleClose} color="primary">
                                    Cancel
          </Button>
                                <Button onClick={handleClose} color="primary">
                                    Subscribe
          </Button>
                            </DialogActions>
                        </Dialog>
                    </div>

                </div>
            </div>
            {/* Login Wrapper End */}

         
        </>
    );
}

