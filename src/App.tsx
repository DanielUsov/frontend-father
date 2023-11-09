import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthForm from './components/form/Form';
import MainPage from './pages/mainPage/mainPage';
import AdminPage from './pages/adminPage/adminPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<AuthForm />} />
            <Route path="main" element={<MainPage />} />
            <Route path="admin" element={<AdminPage />} />
            <Route path="login" element={<AuthForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
