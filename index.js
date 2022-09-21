// express 모듈 불러오기
const express = require('express');
// express 객체 생성
const app = express();
// path 모듈 불러오기
const path = require('path');
const apiRouter = require('./routes/apiRouter');
const dotenv = require('dotenv');

const port = process.env.PORT || 5000;

dotenv.config({ path: path.join(__dirname, '/.env') });

// 기본 포트를 app 객체에 설정
app.listen(port);

// 빌트인 body parser 넣지 않으면 body undefined 에러
app.use(express.json());

// 리액트 정적 파일 제공
app.use(express.static(path.join(__dirname, 'client/build')));

// 메일
app.use('/api', apiRouter);

// 라우트 설정
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

console.log(`server running at http ${port}`);
