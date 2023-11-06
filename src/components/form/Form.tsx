import { useState } from 'react';
import './style.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleRegister = () => {
    setIsLogin(false);
  };

  return (
    <div className="container">
      <div className="welcome">
        <div
          className="pinkbox"
          style={{ transform: isLogin ? 'translateX(0%)' : 'translateX(80%)' }}
        >
          {!isLogin && (
            <div className="signup">
              <h1>register</h1>
              <form autoComplete="off">
                <input type="text" placeholder="username" />
                <input type="email" placeholder="email" />
                <input type="number" placeholder="phone" />
                <input type="password" placeholder="password" />
                <button className="button submit">create account</button>
              </form>
            </div>
          )}
          {isLogin && (
            <div className="signin">
              <h1>sign in</h1>
              <form className="more-padding" autoComplete="off">
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <div className="checkbox">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">remember me</label>
                </div>
                <button className="button submit">login</button>
              </form>
            </div>
          )}
        </div>
        <div className="leftbox">
          <h2 className="title">
            <span>FRONTEND</span>&<br />
            FATHER
          </h2>
          <p className="desc">
            A team of the best <span>developers</span>
          </p>
          <img
            className="flower smaller"
            src="Ellipse43.svg"
            alt="1357d638624297b"
          />
          <p className="account">have an account?</p>
          <button className="button" id="signin" onClick={handleLogin}>
            login
          </button>
        </div>
        <div className="rightbox">
          <h2 className="title">
            <span>FRONTEND</span>&<br />
            FATHER
          </h2>
          <p className="desc">
            A team of the best <span>developers</span>
          </p>
          <img className="flower" src="Ellipse43.svg" />
          <p className="account">don't have an account?</p>
          <button className="button" id="signup" onClick={handleRegister}>
            sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
