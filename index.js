const express = require('express');
// nạp thư viện express vào biến express bằng hàm require.
const app = express();
const port = 3000;
// muốn run web ở cổng nào

app.get('/tintuc', (req, res) => {
    res.send('Hello World!');
});
// định nghĩa tuyến đường (route)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
// 127.0.0.1 - localhost