import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthForm from './components/form/Form';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
