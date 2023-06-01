// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from "cors";
import { sendMail } from "../../utils/mail"

const cors = Cors({ origin: "*" });

function runMiddleWare(req, res, middleWare) {
  return new Promise((resolve, reject) => {
    middleWare(req, res, (result) => {
      if (result instanceof Error) {
        reject(result);
      } else {
        resolve(result);
      }
    });
  });
};

export default async function handler(req, res) {
  // Handle the preflight request
  if (req.method === "OPTIONS") {
    await runMiddleWare(req, res, cors);
    return;
  }
  try {
    await runMiddleWare(req, res, cors);
    sendMail(req.body).then((resp) => {
      res.status(200).json({ message: "Message Sent" });
    }).catch((err) => {
      res.status(400).json(err);
    })
  } catch (e) {
    res.status(400).json(e);
  }
}
