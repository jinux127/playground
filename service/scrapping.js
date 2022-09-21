const cheerio = require('cheerio'); // HTML 파싱 및 DOM 생성
const axios = require('axios');

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

    const textArray = $('.tags-wrapper');

    const resultArr = textArray
      .map((idx, el) => {
        const form = {
          title: '',
          href: '',
          desc: '',
          date: '',
          likes: '',
        };
        const parentNode = $(el).parent();
        // console.log(parentNode.text());
        form['title'] = String(parentNode.children().eq(1).text());
        form['href'] = this.baseURL + String(parentNode.children().eq(1).attr('href'));
        form['desc'] = String(parentNode.children().eq(2).text());
        form['date'] = String(parentNode.find('div.subinfo span:nth-of-type(1)').text());
        form['likes'] = String(parentNode.find('.likes').text());
        return form;
      })
      .toArray();
    return resultArr;
  }
}

module.exports = DomesticCrawler;
