// greeting.jsx
import React, { useState } from 'react';

const Greeting = () => {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h2>Enter your name:</h2>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Your name"
        style={styles.input}
      />
      {name && <h3 style={styles.greeting}>Hello, {name}!</h3>}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '200px',
    marginBottom: '20px',
  },
  greeting: {
    color: '#333',
    marginTop: '10px',
  },
};

export default Greeting;
