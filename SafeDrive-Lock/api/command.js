let lastCommand = "none";

export default function handler(req, res) {
  if (req.method === "POST") {
    lastCommand = req.body.command;
    return res.status(200).json({ ok: true });
  }

  if (req.method === "GET") {
    return res.status(200).json({ command: lastCommand });
  }
}
