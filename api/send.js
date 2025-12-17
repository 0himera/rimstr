export default async function handler(req, res) {
    // Vercel Serverless Function to handle Telegram messages

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, phone, email, source } = req.body;

    if (!name || !phone) {
        return res.status(400).json({ status: 'error', message: 'Name and phone are required' });
    }

    const message = `
🔔 *Новая заявка (Vercel)!*

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
📧 *Email:* ${email || 'Не указан'}
📍 *Источник:* ${source || 'Сайт'}
  `;

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    try {
        if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
            console.warn("Telegram credentials missing in Vercel env");
            return res.json({ status: 'ok', message: 'Simulated success (no tokens provided)' });
        }

        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'Markdown',
            }),
        });

        const data = await response.json();

        if (data.ok) {
            res.status(200).json({ status: 'ok', message: 'Sent to Telegram' });
        } else {
            console.error('Telegram API error:', data);
            res.status(500).json({ status: 'error', message: 'Telegram API error' });
        }
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
}
