import { Request, Response, NextFunction } from 'express';

function validateRegister(req: Request, res: Response, next: NextFunction) {
  const inputBody = Object.values(req.body)
  console.log(inputBody)
  inputBody.forEach((data: any) => {
    if (!data) {
      res.status(400).json({ status: false, message: "All input must be filled" })
    }
  })
  next()
}

export = { validateRegister }