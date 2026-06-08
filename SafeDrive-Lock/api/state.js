let state = {
  lamp: "off",
  locked: false
};

export default function handler(req, res) {
  if (req.method === "POST") {
    state = req.body;
    return res.status(200).json({ ok: true });
  }

  if (req.method === "GET") {
    return res.status(200).json(state);
  }
}
