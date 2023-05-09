"use strict";
import { Request, Response, NextFunction } from 'express';
const { User, Post } = require('../models')
// const Op          = db.Sequelize.Op;
// const Bcrypt = require("bcryptjs");
// const Jwt = require("jsonwebtoken");

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const foundExistingEmail = await User.findOne({ where: { email } })
    if (foundExistingEmail && foundExistingEmail.password === password) {
      return res.status(200).json({ status: true, message: "Login Success", data: foundExistingEmail.id });
    }
    return res.status(200).json({ status: false, message: "Wrong Email/Password", });
  } catch (err) {
    console.log(err)
    res.status(500).json({ success: false, error: "Something went wrong", });
  }
};

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;
    const foundExistingEmail = await User.findOne({ where: { email } })
    if (foundExistingEmail) {
      return res.status(200).json({ status: false, message: "Email already exists", });
    } else {
      const newUser = await User.create({ name, email, password });
      return res.status(200).json({
        status: true,
        message: "Sign Up Success",
        data: newUser.id
      });
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ success: false, error: "Something went wrong", });
  }
};


export = { login, signUp }