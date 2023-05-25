/* eslint-disable import/no-anonymous-default-export */
import User from "../../../models/user";
import dbConnect from "../../../configure/db";

dbConnect();

export default async (req, res) => {
  console.log(req.body);
  let user = new User(req.body);
  await user.save()
  res.status(200).json({ success: true, data: user });
}