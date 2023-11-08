import { useState } from 'react';
import { useLoginMutation } from '../../__data__/services/auth';
import { useFormSelect } from '../../hooks/formSelect';
import './style.css';
import { objectIsEmptyCheck } from '../../utils/objectIsEmpty';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [login, { data }] = useLoginMutation();
  const { selectData, updateField } = useFormSelect({
    username: '',
    password: '',
  });

  const handleSubmit = async () => {
    if (objectIsEmptyCheck(selectData, ['username', 'password'])) {
      await login(selectData);
      if (data) navigate('main');
    }
  };

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
                <input
                  type="text"
                  placeholder="username"
                  value={selectData.username}
                  onChange={(e) => updateField('username', e.target.value)}
                />
                <input
                  type="password"
                  placeholder="password"
                  value={selectData.password}
                  onChange={(e) => updateField('password', e.target.value)}
                />
                <div className="checkbox">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">remember me</label>
                </div>
                <button
                  className="button submit"
                  type="button"
                  onClick={handleSubmit}
                >
                  login
                </button>
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
