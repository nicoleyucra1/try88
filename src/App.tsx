import {Routes, Route, Navigate} from 'react-router-dom';
import Layout from './Layout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CollectionsPage from './pages/CollectionsPage';
import CollectionsDetailsPage from './pages/CollectionsDetailsPage.tsx'


export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route element={<Layout/>}>
        <Route path="/collection-points" element={<CollectionsPage/>}/>
        <Route path="/collection-points/:id" element={<CollectionsDetailsPage/>}/>
      </Route>
      <Route path="*" element={<Navigate to="/collection-points" replace/>}/>
    </Routes>
  )
}

