// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(username);
  };

  const handleChange = (event) => {
    setUsername(inputRef.current.value.toLowerCase());
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
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
