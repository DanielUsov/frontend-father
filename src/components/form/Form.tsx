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
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Вход на платформу</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="login-input"
            placeholder="логин"
            value={selectData.username}
            onChange={(e) => updateField('username', e.target.value)}
          />
          <input
            type="password"
            className="login-input"
            placeholder="пароль"
            value={selectData.password}
            onChange={(e) => updateField('password', e.target.value)}
          />
          <button type="submit" className="login-button" onClick={handleLogin}>Войти</button>
          {/* <a href="#" className="register-link" onClick={handleRegister}>Зарегистрироваться</a> */}
        </form>
      </div>
    </div>
  );
}

export default AuthForm;

