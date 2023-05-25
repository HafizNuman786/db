/* eslint-disable import/no-anonymous-default-export */
import User from "../../../models/user";
import dbConnect from "../../../configure/db";

dbConnect();



export default async (req, res) => {
  let user = await User.findOne({ UserEmail: req.body.UserEmail });
  if (user) {
    if (user.UserPassword == req.body.UserPassword) {
      res.status(200).json({ success: true, data: user });
    } else {
      res.status(200).json({ success: false });
    }

  } else {
    res.json({ message: "user doest not exit" });
  }
  // JSON.parse(user)
  console.log(user);

}