import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProviders/AuthProvider';

const Profile = () => {
    const {user}= useContext(AuthContext);
    return (
        <div className=' mt-2 container mx-auto'>
            <div className='space-y-3'>
                <img className='w-96 rounded-full' src={user.photoURL} alt="" />
                <div>
                    <h4><span className='font-bold'>Name:</span> {user.displayName}</h4>
                    <h4><span className='font-bold'>Name:</span> {user.email}</h4>
                </div>
            </div>
        </div>
    );
};

export default Profile;