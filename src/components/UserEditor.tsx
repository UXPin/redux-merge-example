import * as React from 'react';
import { useDispatch } from 'react-redux';
import { updateName, updateAge } from '../store';
import { AppDispatch } from '../store';

const UserEditor: React.FC = () => {
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const dispatch = useDispatch<AppDispatch>();

    // Handle updating the Redux state
    const handleUpdate = () => {
        if (name) dispatch(updateName(name)); // Dispatch action to update name
        if (age) dispatch(updateAge(Number(age))); // Dispatch action to update age
    };

    return (
        <div>
            <h2>Edit User Info:</h2>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Age:
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default UserEditor;
