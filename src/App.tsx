import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { Success } from './pages/Success';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
