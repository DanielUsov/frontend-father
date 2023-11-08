import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthForm from './components/form/Form';
import MainPage from './pages/mainPage/mainPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<AuthForm />} />
            <Route path="main" element={<MainPage />} />
            <Route path="login" element={<AuthForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
