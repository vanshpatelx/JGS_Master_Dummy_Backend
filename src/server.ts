import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';
import userRouter from './routes/user.route';
import newsRouter from './routes/news.route';
import heroRouter from './routes/hero.route';
import watchlistRouter from './routes/watchlist.route';
import portfolioRouter from './routes/portfolio.route';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api', userRouter);
app.use('/api', newsRouter);
app.use('/api', heroRouter);
app.use('/api', watchlistRouter);
app.use('/api', portfolioRouter);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
});


