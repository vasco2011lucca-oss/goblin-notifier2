export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const WEBHOOK_URL = "https://discord.com/api/webhooks/1544832475371536456/DBn7XvZu_FIzPbVigU61TcTtExf9agxoWDyK3HgHyJX4YshIs2uY9ppu6jDjflLqBams";

  try {
    const { content } = req.body;

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content })
    });

    if (!response.ok) {
      return res.status(500).json({ success: false, error: 'Erro ao enviar para o Discord' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}
