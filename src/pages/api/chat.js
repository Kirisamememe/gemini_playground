import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function handleMessage(req, res) {
    const { message, history } = req.body;

    // Google AIモデルを初期化
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // チャット履歴を使用してチャットを開始
    const chat = model.startChat({
        history,
        generationConfig: { maxOutputTokens: 2000 },
    });

    // メッセージを送信し、結果を取得
    const result = await chat.sendMessage(message);
    const response = result.response;
    const text = response.text();

    // 結果をフロントエンドに送信
    res.status(200).json({ reply: text });
}

export default handleMessage;
