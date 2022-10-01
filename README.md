# 안녕하세요! Jinux's playground 입니다!

## 개발 배경

제가 만들고 싶은 컴포넌트와 연습하고 싶은 기술들을 다루고 기록할 공간이 필요했습니다. 매번 새로운 repo를 생성하는 것은 여러 곳에 나눠져 보기 힘들다는 점을 느꼈습니다.

저의 맥북을 그대로 가져와 구현하여 맥북안에 맥북을 아이디어로 삼고 구현하였습니다.

## 구현현황

- [x] Landing
- [x] Dock + Home
- [x] Finder
- [x] Launchpad
- [ ] Chrome
- [x] Memo
- [x] Message
- [ ] Visual Studio Code
- [x] Trash (임시)
- [x] drag 이동

## Landing + Home

![배경화면](/README_assets/home.gif)

맥북 배경화면이 아닌 애플리케이션의 초기 화면입니다.

## Finder

![Finder](/README_assets/Finder.png)

제 블로그의 포스팅된 게시물을 스크랩핑해서 랜딩시간 기준으로 포스팅된 실제내용을 표현해주었습니다.

해당 Finder 요소를 클릭하면 실제 페이지로 이동합니다.

### 구현과정

초기엔 실제 블로그를 애플리케이션 안에 띄우고 싶었으나 Finder에 맞게 리스트로 보여주는 것으로 변경하였습니다.

#### 문제

브라우저단에서 스크립트로 스크랩할 페이지를 호출할 수 없기에 서버구축이 필요했습니다.

#### 해결과정

```js
app.use('/api/data', async function (req, res) {
  try {
    const crawler = new DomesticCrawler();
    const data = await crawler.crawlStart();

    res.json({ data, status: 200 });
  } catch (e) {
    console.log('crawStart failed');
    res.json({ status: 405 });
  }
});
```

이를 해결하고자 간단한 노드 서버를 구축하였고 서버를 통해 블로그를 호출하고 cherrio 라이브러리를 사용해 원하는 데이터를 추출, 전송하였습니다.

또, 기존의 서비스는 서버가 필요하지 않아 vercel로 배포서버를 구성하였지만 vercel은 서버를 지원하지 않아 새로운 서버를 heroku를 변경하여 배포하였습니다.

## Memo

![메모](/README_assets/Memo.png)

제가 구현해놓은 컴포넌트들을 리스트 형태로 둘러볼 수 있게 구현하였습니다.

## Message

![메시지](/README_assets/Message.gif)

- 전송결과
  ![이메일](/README_assets/email.png)

쪽지를 보낼 수 있게 구현하였습니다.

### 구현과정

- 간단한 Node 서버를 구성하고 Nodemailer를 통해 메일을 전송하였습니다.
- 사용자가 보다 간편하게 전송할 수 있도록 익명 시스템을 도입하였습니다.
- `전송중` 과 `전송됨`이라는 문구를 표현하여 사용자가 인지하도록 하였습니다.

#### 문제 1.

기존의 노드서버는 GET만을 사용하고 있어 문제가 없었지만 이번엔 POST로 데이터를 전송해야 했습니다. 이를 body로 읽어오지 못한 이슈가 있었습니다.

#### 해결과정 1.

body의 json 값을 읽어오기 위해 body-parser라는 라이브러리를 사용해야 했습니다. 이를 사용하지않고 Node에서 제공하는 express.json()를 사용해 해결하였습니다.

#### 문제 2.

메시지 컴포넌트를 왼쪽 오른쪽 나눠 표현해야했습니다. 각 컴포넌트를 만들게 되면 비효율적이라고 생각이 되어 공통으로 사용할 방법이 없을까 고민했습니다.

#### 해결과정 2.

props로 isLeft의 상태를 받아와 메시지박스 컴포넌트를 가져와 사용할 때 처리하도록 구현하였습니다.
