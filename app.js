import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv"
import helmet from "helmet"
import hpp from "hpp"
import cors from "cors";

dotenv.config();

import healthCheckRouter from "./routes/healthCheck.js";

const app = express();

app.use(cors());

if(process.env.NODE_ENV === 'production'){
  app.use(logger('combined'));
  app.use(helmet());
  app.use(hpp());
} else{
  app.use(logger('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/hello', healthCheckRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

export default app;