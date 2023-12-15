// const { GoogleGenerativeAI } = require("@google/generative-ai");
//
// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI("");
//
// async function run() {
//     // For text-only input, use the gemini-pro model
//     const model = genAI.getGenerativeModel({ model: "gemini-pro"});
//
//     const prompt = "Next.jsを使ってるけど、.gitignoreに.envファイルを追加したのに、なぜか無視されません。依然として変更リストに存在します"
//
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = response.text();
//     console.log(text);
// }
//
// run().catch(console.error);
