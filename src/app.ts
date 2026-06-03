import express, { Application, NextFunction, Request, Response } from "express";
import personRouter from "./routes/person.routes";
import productRouter from "./routes/product.route";
import { HttpException } from "./exceptions/http-exception";
import { ApiResponseHelper } from "./utils/api-response";

import userRoute from "./routes/user.route";
import adminRouter from "./routes/admin/user.routes";
const app: Application = express();
app.use(express.json()); //use json as request
app.use(express.urlencoded({ extended: true })); //use form-urlencoded as request

app.use("/api/persons", personRouter);
app.use("/api/product", productRouter);
app.use("/api/v1/auth", userRoute);
app.use("/api/v1/admin/users", adminRouter);

//global handler if no route match , return 404

app.use((req: Request, res: Response) => {
  return res.status(404).json({ message: "Route not found" });
});

//global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof HttpException) {
    return ApiResponseHelper.error(res, err.message, err.status);
  }
  return ApiResponseHelper.error(
    res,
    err?.message || "Internal Server Error",
    500,
  );
});
export const PORT: number = 3000;

export default app;
