// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sendMail } from "../../utils/mail"

export default function handler(req, res) {
  try {
    sendMail(req.body).then((resp) => {
      res.status(200).json({ message: "Message Sent"});
    }).catch((err) => {
      res.status(400).json(err);
    })
  } catch (e) {
    res.status(400).json(e);
  }
}
