import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import ProtectedRoute from './pages/ProtectedRoute';
import TrianglesPage from './pages/TrianglesPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<TrianglesPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
