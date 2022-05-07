    import React, { Fragment } from 'react';
import MetaData from '../../components/layout/MetaData';
import { useSelector } from 'react-redux';
import Loader from '../../components/layout/Loader/Loader'
import { Link } from 'react-router-dom'
import './Profile.css'


const Profile = () => {

    const { user, loading } = useSelector( ( state ) => state.user );
    return (
        <Fragment>
            {
                loading ? ( <Loader /> ) : (
                    <Fragment>
                        <MetaData title={ `${user.name.split(' ')[0]}'s Profile` }/>
                        <div className="profileContainer">
                            <div>
                                <h1>My Profile</h1>
                                <img src={ user.avatar.url ? user.avatar.url : "/Profile.png" } alt={ user.name } />
                                <Link to="/me/update">Edit Profile</Link>
                            </div>
                        
                            <div className='main-pro'>
                                <div>
                                    <h4>Full Name</h4>
                                    <p>{ user.name }</p>
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <p>{ user.email }</p>
                                </div>
                                <div>
                                    <h4>Joined On</h4>
                                    <p>{ String(user.createdAt).substr(0, 10) }</p>
                                </div>
                                <div>
                                    <Link to="/password/update">Change Password</Link>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )
            }
        </Fragment>
    );
};

export default Profile;
