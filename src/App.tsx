import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './pages/ProtectedRoute';
import HomePage from './pages/HomePage';
import TriangleActionsPage from './pages/TriangleActionsPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/new" element={<TriangleActionsPage />} />
                    <Route path="/edit/:id" element={<TriangleActionsPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
