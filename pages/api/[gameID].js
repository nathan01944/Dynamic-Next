// export default function handler(req, res) {
//     res.status(200).json({ name: 'John Doe' })
//   }
  
import { formatted } from "../data/formatted"

export default function personHandler({ query: { game_id } }, res) {
  //const filtered = formatted.filter((p) => p.game_id === game_id)

  // User with id exists
  if (formatted) {
    res.status(200).json(formatted)
  } else {
    res.status(404).json({ message: `Game with id: ${game_id} not found.` })
  }
}