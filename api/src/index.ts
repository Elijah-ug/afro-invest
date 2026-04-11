import express from 'express';
import cors from 'cors';

import adminRoutes from './routes/admin';
import investmentRoutes from './routes/investments';
import userRoutes from './routes/users';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
const baseurl = '/afro-invest/api/v1';
// Routes
app.use(`${baseurl}/users`, userRoutes);
app.use(`${baseurl}/admin`, adminRoutes);
app.use(`${baseurl}/investments`, investmentRoutes);

// Global error handling
app.use(errorHandler);

// Start server
console.log('Port==>', PORT);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
