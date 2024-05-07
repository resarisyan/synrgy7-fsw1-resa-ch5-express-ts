import { Request, Response, NextFunction } from 'express';

const notFound = (req: Request, res: Response, next: NextFunction): void => {
  const protocol = req.protocol;
  const host = req.hostname;
  const url = req.originalUrl;
  const port = process.env.APP_PORT;
  const fullUrl = `${protocol}://${host}:${port}${url}`;
  res.status(404).send({
    success: false,
    message: `Route ${fullUrl} Not Found`,
  });
};

const appError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errStatusCode = err.status_code || 400;
  const errMessage = err.message || 'Something went wrong';
  res.status(errStatusCode).json({
    success: false,
    message: errMessage,
  });
};

const idNotFound = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id = req.params.id;
  if (isNaN(id as any)) {
    res.status(400).send({
      success: false,
      message: 'Invalid Id',
    });
  }
  next();
};

export { notFound, appError, idNotFound };
