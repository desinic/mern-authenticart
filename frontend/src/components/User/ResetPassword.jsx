import React, {Fragment, useState, useEffect} from 'react';
import Loader from '../../components/layout/Loader/Loader';
import MetaData from '../layout/MetaData'
import { useDispatch, useSelector } from 'react-redux';
import {clearErrors, resetPassword} from '../../actions/userAction'
import { useAlert } from 'react-alert';
import {useNavigate} from 'react-router-dom'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import { useParams } from 'react-router-dom';
import './ResetPassword.css'

const ResetPassword = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();
    const param = useParams();

    const { error, success, loading } = useSelector( state => state.forgotPassword );

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const resetPasswordSubmit = (e) => {
        e.preventDefault();
    
        const myForm = new FormData();
    
        myForm.set("password", password);
        myForm.set("confirmPassword", confirmPassword);
        dispatch(resetPassword(param.token, myForm));
    };
    
    useEffect( () => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if ( success ) {
            alert.success( 'Password Reset Successfully' );
            navigate( '/login' );
        }
    }, [ dispatch, error, alert, navigate, success ] );
    return (
        <Fragment>
            {
                loading ? ( <Loader /> ) : (
                    <Fragment>
                        <MetaData title="Reset Password"/>
                        <div className="resetPasswordContainer">
                            <div className="resetPasswordBox">
                                <h2 className='resetPasswordHeading'>Reset Password</h2>
                                <form
                                    className="resetPasswordForm"
                                    encType="multipart/form-data"
                                    onSubmit={resetPasswordSubmit}
                                >
                                <div className="resetPassword">
                                    <VpnKeyIcon />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="resetPassword">
                                    <LockOpenIcon />
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        required
                                        name="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                                <input type="submit" value="Reset" className="resetPasswordBtn" />
                                </form>
                            </div>
                        </div>
                    </Fragment>
                )
            }
        </Fragment>
    );
};

export default ResetPassword;
