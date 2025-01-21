import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const UserNameDisplay: React.FC = () => {
    // Access the `name` from the Redux store
    const name = useSelector((state: RootState) => state.user.name);

    return (
        <div>
            <h2>User Name:</h2>
            <p>{name}</p>
        </div>
    );
};

export default UserNameDisplay;
