import * as React from 'react';
import UserNameDisplay from './components/UserNameDisplay';
import UserAgeDisplay from './components/UserAgeDisplay';
import UserEditor from './components/UserEditor';

const App: React.FC = () => {
  return (
      <div style={{ padding: '20px' }}>
        <h1>User Profile</h1>
        <UserNameDisplay />
        <UserAgeDisplay />
        <UserEditor />
      </div>
  );
};

export default App;
