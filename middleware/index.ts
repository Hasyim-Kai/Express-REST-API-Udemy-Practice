import { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
const cors = require('cors');
const express = require('express');

module.exports = (app: any) => {

  app.use(cors())
  app.use(express.json());
  app.use(express.urlencoded({ extended: true, }));
  app.use(morgan(`dev`));
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    next();
  });

}