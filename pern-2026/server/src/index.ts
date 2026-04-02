import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import { planRouter } from './routes/plan';
import { profileRouter } from './routes/profile';

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(cookieParser())
app.use(express.json())

// API Routes
app.use("/plan", planRouter);
app.use("/profile", profileRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})