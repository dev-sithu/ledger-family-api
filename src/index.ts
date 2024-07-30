import express, {Request, Response} from 'express';
import userRouter from "./routes/users";

const app = express();
const PORT = process.env.PORT || 3000;

// Main page
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

// Health check
app.get('/healthcheck', (req: Request, res: Response) => {
  res.status(200).send('OK');
})

// API
// User routes
app.use('/api/users', userRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Running the server at http://localhost:${PORT}`)
});
