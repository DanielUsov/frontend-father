import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthForm from './components/form/Form';
import MainPage from './pages/mainPage/mainPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<AuthForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
