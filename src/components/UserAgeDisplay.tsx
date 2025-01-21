import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const UserAgeDisplay: React.FC = () => {
    // Access the `age` from the Redux store
    const age = useSelector((state: RootState) => state.user.age);

    return (
        <div>
            <h2>User Age:</h2>
            <p>{age}</p>
        </div>
    );
};

export default UserAgeDisplay;
