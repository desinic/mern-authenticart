import React, { Fragment, useState } from 'react';
import { SpeedDial, SpeedDialAction } from '@material-ui/lab';
import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert';
import { useDispatch } from 'react-redux';
import {logout} from '../../../actions/userAction'
import './Header.css'

const UserOptions = ({user}) => {

    const alert = useAlert()
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const options = [
        { icon: <PersonIcon />, name: "Profile", func: account },
        { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
    ];

    if (user.role === "admin") {
            options.unshift({
            icon: <DashboardIcon />,
            name: "Dashboard",
            func: dashboard,
            });
    }

    function dashboard() {
        navigate("/admin/dashboard");
    }

    function account() {
        navigate("/account");
    }
    function logoutUser() {
        dispatch(logout());
        alert.success( "Logout Successfully" );
        navigate("/");
    }
    return (
        <Fragment>
            <Backdrop open={open}/>
            <SpeedDial
                className="speedDial"
                ariaLabel="SpeedDial tooltip example"
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={ open }
                direction='down'
                icon={
                    <img
                        className="speedDialIcon"
                        src={user.avatar.url ? user.avatar.url : "/Profile.png"}
                        alt="Profile"
                    />
                }
            >
                {
                    options.map( item => (
                        <SpeedDialAction
                            key={ item.name }
                            icon={ item.icon }
                            tooltipTitle={ item.name }
                            onClick={ item.func }
                            tooltipOpen={ window.innerWidth <= 600 ? true : false }
                        />
                    ))
                }
            </SpeedDial>
        </Fragment>
    );
};

export default UserOptions;
