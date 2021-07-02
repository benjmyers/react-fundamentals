// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // const [message, setMessage] = React.useState();
  const [username, setUsername] = React.useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(inputRef.current.value);
  };

  const handleChange = (event) => {
    // const value = event.target.value;
    // const isValid = value === value.toLowerCase();
    // setMessage(isValid ? null : 'Username must be lower case');
    setUsername(event.target.value.toLowerCase());
  };

  const inputRef = React.useRef(null);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="input">Username:</label>
        <input
          id="input"
          type="text"
          ref={inputRef}
          onChange={handleChange}
          value={username}
        />
      </div>
      {/* <div role="alert">{message}</div> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
