// express 모듈 불러오기
const express = require('express');
// express 객체 생성
const app = express();
// path 모듈 불러오기
const path = require('path');
const axios = require('axios'); // HTTP 클라이언트 모듈
const cheerio = require('cheerio'); // HTML 파싱 및 DOM 생성

class DomesticCrawler {
  constructor() {
    this.baseURL = 'https://velog.io';
    this.client = axios.create({
      baseURL: this.baseURL + '/@jinux127',
    });
  }
  // ❷ 실제 크롤링을 수행
  async crawlStart() {
    // '발생동향 > 국내 발생 현황' 페이지의 주소
    const url = '/';
    const resp = await this.client.get(url);
    const $ = cheerio.load(resp.data);
    //  .sc-jvvksu kRCqQL
    const textArray = $('div.sc-gIBqdA.oYdaI')
      .map((idx, el) => {
        const form = {
          title: '',
          href: '',
          desc: '',
          date: '',
          likes: '',
        };

        form['title'] = String($(el).find('h2').text());
        form['href'] = this.baseURL + String($(el).find('a:nth-of-type(1)').attr('href'));
        form['desc'] = String($(el).find('p').text());
        form['date'] = String($(el).find('div.subinfo span:nth-of-type(1)').text());
        form['likes'] = String($(el).find('.likes').text());
        return form;
      })
      .toArray();
    return textArray;
  }
}
// 미들웨어 함수를 특정 경로에 등록
app.use('/api/data', async function (req, res) {
  try {
    const crawler = new DomesticCrawler();
    const data = await crawler.crawlStart();
    res.json({ data, status: 200 });
  } catch (e) {
    console.log('crawStart failed', e);
    res.json({ status: 405 });
  }
});

// 기본 포트를 app 객체에 설정
const port = process.env.PORT || 5000;
app.listen(port);

// 리액트 정적 파일 제공
app.use(express.static(path.join(__dirname, 'client/build')));

// 라우트 설정
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

console.log(`server running at http ${port}`);
