// my-weather-api-server/src/index.ts
import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 3001; // あなたのReactアプリとは異なるポートを使用

// --- CORS設定 ---
// Reactアプリケーションが実行されているオリジンからのリクエストを許可
// 例: Create React Appのデフォルトは3000、Viteのデフォルトは5173
app.use(cors({
  origin: 'http://localhost:5173', // ★ここをあなたのReactアプリのURLに合わせる★
  methods: ['GET'], // GETリクエストのみを許可
  allowedHeaders: ['Content-Type']
}));

// JSONボディをパースするためのミドルウェア（今回はGETなので必須ではありませんが、含めておきます）
app.use(express.json());

// --- /weather エンドポイントの定義 ---
app.get('/weather', (req: Request, res: Response) => {
  console.log('GET /weather リクエストを受信しました。');

  // 仮の天気データ（実際は外部APIやデータベースから取得）
  const weatherData = {
    location: "Tokyo",
    temperature: 25, // 摂氏
    condition: "晴れ",
    humidity: 60, // %
    windSpeed: 8 // m/s
  };

  // JSON形式でデータを返す
  res.json(weatherData);
});

// --- サーバー起動 ---
app.listen(port, () => {
  console.log(`Weather API Server is running at http://localhost:${port}`);
  console.log(`CORS allowed origin: ${app.get('cors-origin')}`);
});