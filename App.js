// App.js
import React, { useState } from 'react';
import { View } from 'react-native';
import LoginForm from './src/LoginForm';
import AdminPanel from './src/AdminPanel';
import UserPanel from './src/UserPanel';
import GuestView from './src/GuestView';


const App = () => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (username, password) => {
    // Zakładając, że logika logowania jest tutaj
    if (username === 'admin') {
      setUser({ role: 'admin' });
    } else {
      setUser({ role: 'user' });
    }
  };

  const navigateToLogin = () => {
    setShowLogin(true);
  };

  return (
    <View style={{ flex: 1 }}>
      {user ? (
        user.role === 'admin' ? <AdminPanel /> : <UserPanel />
      ) : showLogin ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <GuestView onNavigateToLogin={navigateToLogin} />
      )}
    </View>
  );
};

export default App;
