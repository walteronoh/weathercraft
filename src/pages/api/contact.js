// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from "cors";
import { sendMail } from "../../utils/mail"

const cors = Cors({ origin: "https://www.walterkiprono.com" });

export default function handler(req, res) {
  // Run the CORS middleware
  cors(req, res, async () => {
    try {
      sendMail(req.body).then((resp) => {
        res.status(200).json({ message: "Message Sent" });
      }).catch((err) => {
        res.status(400).json(err);
      })
    } catch (e) {
      res.status(400).json(e);
    }
  });
}
