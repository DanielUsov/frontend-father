import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthForm from './components/form/Form';
import { MainWrapper } from './components/main-wrapper';
import AdminPage from './pages/adminPage/adminPage';
import { ImportantDocuments } from './pages/important-documents';
import { MainPage } from './pages/mainPage/mainPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<MainWrapper children={<MainPage />} />} />
            {/*<Route
              path="main"
              element={
                <PrivateRoute
                  element={<MainWrapper children={<MainPage />} />}
                />
              }
            />
            <Route
              path="important-document/:documentID"
              element={
                <PrivateRoute
                  element={<MainWrapper children={<ImportantDocuments />} />}
                />
              }
            />
            <Route
              path="admin"
              element={<PrivateRoute element={<AdminPage />} />}
            />
            <Route path="dev"> */}
            <Route
              path="main"
              element={<MainWrapper children={<MainPage />} />}
            />
            <Route
              path="important-document/:documentID"
              element={<MainWrapper children={<ImportantDocuments />} />}
            />
            <Route path="admin" element={<AdminPage />} />
          </Route>
          <Route path="login" element={<AuthForm />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
