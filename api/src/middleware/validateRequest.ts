import type { Request, Response, NextFunction } from 'express';
// import type { ZodTypeAny } from 'zod';

export const validateRequest = (schema: any) => (req: Request, res: Response, next: NextFunction) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      status: 'fail',
      errors: result.error.flatten(),
    });
  }

  req.body = result.data;
  next();
};
