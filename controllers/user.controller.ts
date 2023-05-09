"use strict";
import { Request, Response, NextFunction } from 'express';
const { User, Post } = require('../models')
// const Op          = db.Sequelize.Op;
// const Bcrypt = require("bcryptjs");
// const Jwt = require("jsonwebtoken");

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  try {
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
    res.status(500).json({
      success: false,
      error: "It's Us. Not You ..",
    });
  }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await User.findAll({ include: 'Posts' })
    if (data.length > 0) {
      return res.status(200).json({
        status: true,
        message: "Success",
        data
      });
    } else {
      return res.status(200).json({ status: true, message: "There is no Registered User" });
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      error: "Something went wrong",
    });
  }
};


export = { signUp, getAll }