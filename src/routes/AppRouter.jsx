// AppRouter.jsx
import { Routes, Route } from 'react-router-dom';
import AuthHelper from '../auth/AuthHelper';
import { lazy, Suspense } from 'react';
import SkeletonLoader from '../components/SkeletonLoader';
import PublicRoute from './PublicRoute';
import Layout from '../components/Layout';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Home = lazy(() => import('../pages/Home'));
const Settings = lazy(() => import('../pages/Setting'));
const History = lazy(() => import('../pages/History'));
const Documents = lazy(() => import('../pages/Documents'));
const Login = lazy(() => import('../pages/Login'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AppRouter = () => {
  return (
    <Suspense fallback={<SkeletonLoader />}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<AuthHelper />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/history" element={<History />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/documents" element={<Documents />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;