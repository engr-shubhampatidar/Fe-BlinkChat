
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <div className='Login-Bar'>
          <div className='Login-Form'>
            <form className='Form'>
              <input className='username' type="text" placeholder="Username" />
              <input className='password' type="password" placeholder="Password" />
              <input className='login' type="submit" value="Login" />
            </form>
          </div>
          <div className='Login-Footer'>
            <p>
              Don't have an account?
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
