import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import adminRoutes from './routes/admin';
import investmentRoutes from './routes/investments';
import userRoutes from './routes/users';
import { errorHandler } from './middleware/errorHandler';
import investmentPlanRoutes from './routes/investmentPlan';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// cookie parser middleware
app.use(cookieParser());
app.set('trust proxy', 1);
// Middleware ===== to put the origin in env ========
app.use(
  cors({
    origin: ['http://localhost:5173', 'https://afro-invest.vercel.app'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);
const baseurl = '/afro-invest/api/v1';
// Routes
app.use(`${baseurl}/users`, userRoutes);
app.use(`${baseurl}/admin`, adminRoutes);
app.use(`${baseurl}/investments`, investmentRoutes);
app.use(`${baseurl}/investment-plans`, investmentPlanRoutes);

// Global error handling
app.use(errorHandler);

// Start server
console.log('Port==>', PORT);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
