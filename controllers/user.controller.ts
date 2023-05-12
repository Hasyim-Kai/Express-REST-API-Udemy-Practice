"use strict";
import { Request, Response, NextFunction } from 'express';
const { User } = require('../models')

const getAll = async (req: Request, res: Response) => {
  try {
    const data = await User.findAll({ include: 'Posts' })
    if (data.length > 0) {
      return res.status(200).json({ status: true, message: "Success", data });
    } else {
      return res.status(200).json({ status: true, message: "There is no Registered User" });
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ success: false, error: "Something went wrong", });
  }
};

const findOne = async (req: Request, res: Response) => {
  try {
    const data = await User.findByPk(req.params.id);
    if (data) {
      return res.status(200).json({ status: true, message: "User Found", data });
    } else {
      return res.status(200).json({ status: true, message: "There is no Registered User" });
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ success: false, error: "Something went wrong", });
  }
};

const getMyProfile = async (req: Request, res: Response) => {
  try {
    const user = res.locals.user
    const data = await User.findByPk(user.id);
    if (data) {
      return res.status(200).json({ status: true, message: "User Found", data });
    }
    return res.status(200).json({ status: true, message: "There is no Registered User" });
  } catch (err) {
    console.log(err)
    res.status(500).json({ success: false, error: "Something went wrong", });
  }
};


export = { getAll, findOne, getMyProfile }