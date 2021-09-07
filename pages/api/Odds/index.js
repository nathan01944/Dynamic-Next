import { formatted } from "../../../data/formatted"

export default function handler(req, res) {
    if (formatted) {
        res.status(200).json(formatted)
      } else {
        res.status(404).json({ message: `Data not found.` })
      }
  }  