export default function handler(req, res) {
  const token = req.query.token;
  if (token !== process.env.ACCESS_TOKEN) {
    return res.status(403).json({ error: "Unauthorized" });
  }
  res.status(200).json({ code: process.env.SECRET_CODE });
}
// Redeploy trigger
