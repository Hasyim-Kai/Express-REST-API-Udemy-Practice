import { Request, Response, NextFunction } from 'express';

function validateRegister(req: Request, res: Response, next: NextFunction) {
  console.log(req.body)
  next()
}

export = { validateRegister }