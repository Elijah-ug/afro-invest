import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { InvestmentPlans } from '@/pages/InvestmentPlans';
import { ProfitCalculator } from '@/pages/ProfitCalculator';
import { Login } from '@/pages/Login';
import { Register } from '@/pages/Register';
import { Dashboard } from '@/pages/user/dashboard';
import { RequireAuth } from './ProtectedRoute';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Layout Routes */}
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/investment-plans' element={<InvestmentPlans />} />
        <Route path='/profit-calculator' element={<ProfitCalculator />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* Dashboard Routes (Protected) */}
        <Route
          path='/dashboard'
          element={
            <RequireAuth>
              <DashboardLayout />
            </RequireAuth>
          }
        >
          <Route index element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
};
