import * as React from 'react';
import { useDispatch } from 'react-redux';
import { updateState } from "../store";

interface ChangeStateProps {
    newState: { name: string; age: number };
}

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f4f6f8',
        borderRadius: '8px',
        maxWidth: '400px',
        margin: 'auto',
        textAlign: 'center' as 'center',
    },
    header: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '20px',
    },
};

export default function ReduxStateEditor({ newState = {
    name: 'John Doe',
    age: 30,
}}: ChangeStateProps) {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(updateState(newState));
    }, [newState, dispatch]);

    return (
        <div>
            <div style={styles.container}>
                <span style={styles.header}>You can change the whole state of the app by updating the property new state in properties panel</span>
            </div>
        </div>
    );
}
