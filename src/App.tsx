import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthForm from './components/form/Form';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<AuthForm />} />
            <Route path="main" element={<></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
