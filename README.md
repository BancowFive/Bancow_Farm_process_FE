<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="/client/public/bancow_logo.svg" alt="Project logo"></a>
</p>

<h1 align="center">📌 뱅카우 농가 입점 프로세스</h1>

<div align="center">
- 과제 기간: 2022/01/04 ~ 2022/02/14 <br />
- 최종발표: 2022/02/14 (수)
</div>

<div align="center">

## Team :

**FE:** 🧑🏻‍💻정재윤(조장), 👩🏼‍💻강다현, 👩🏼‍💻강하은

**BE:** 👨🏼‍💻김광현, 🧑‍💻김대희, 👨🏼‍💻임해규

**UX/UI:** 👩‍🎨김은민, 🧑🏻‍🎨우희찬, 👩‍🎨이한영

</div>

---

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

최근에는 21분만에 한우 투자 펀딩이 종료되었을 정도로 수요는 많으나 그만큼 많은 공급은 하지 못하고 있는 상황이다.

공급이 부족한 이유로는 농가 컨택트, 농가 신용과 실사 과정 등을 진행하여 최종 입점까지 되는 과정이 상당히 긴 문제점 등이 있다.
그래서 이 과정을 온라인으로 진행하면서 빠르게 진행하여 공급을 늘릴 수 있는 방법 도입을 목적으로 하고 있다.

## 🏁 Getting Started <a name = "getting_started"></a>

1. 프로세스 (기업제시)
   <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a1545b67-4780-4630-8acd-628de1f21121/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220212T154503Z&X-Amz-Expires=86400&X-Amz-Signature=61cdb9b6f21a0086c1f7727e89d06dcf2a4cf2fb93e6ed571ffed8479312d040&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" />
   프로세스는 내부 논의 정보를 토대로 종합하여 만들어진 사안으로, 변경 불가능하며 프로세스 변형 필요 시 근거를 제시하면 고려 가능

- 메인 랜딩페이지(start)
- 문의페이지
- 입점 페이지
  - 입점에 필요한 농가 정보 입력 및 서류제출 (타입폼 형태 요청)
  - 실사 스케쥴 조정 페이지
- 내 농가정보 (X)
- 회원가입**(간편 사용자 확인, 개인별 정보입력 상태확인을 위함)**
  - 이름, 전화번호, 이메일, 농가이름...
- 로그인

### Prerequisites

- target: 시니어층 (농가 주인)
- user: 시니어층이 타겟이지만, 실질적인 사용자로는 농장주의 자식 혹은 손자, 농장과 계약된 회사의 영업사원등으로 20 ~ 70까지 다양한 연령층이 사용자로 예상된다.


### And coding style tests

**FE**

```
Airbnb Style Guide
```

## 🎈 Usage <a name="usage"></a>

### 페이지 설명

> > 페이지 설명하기

### API 사용서

- 요청 주소(Endpoint): `http://15.164.228.240:8080`

#### 본인인증

- 휴대폰 본인인증

##### 1차 프로세스(농장주/농장 정보 입력)

- 랜딩페이지 -> 본인인증 -> 사용자 상태 확인 -> 약관동의 -> 1차 단계 진행 -> 1차 단계 완료 -> 승인대기
- 이어하기 페이지 -> 작성중이던 페이지로 이동

##### 2차 프로세스(농가입점 필수 서류 제출)

- 2차 단계 시작 페이지 -> 2차 단계 진행 -> 2차 단계 완료 -> 승인대기
- 이어하기 페이지 -> 작성중이던 페이지로 이동

##### 3차 프로세스 (농장 실사일 잡기)

- 3차 단계 시작 페이지 -> 3차 단계 진행 -> 3차 단계 완료 -> 승인대기 -> 입점완료
- 이어하기 페이지 -> 작성중이던 페이지로 이동

---

#### 인증

##### 문자인증번호 정송

coolSMS 휴대폰 본인인증을 위해 인증번호를 전송합니다.

1. 페이지 방문시 본인인증을 위해 인증번호 4자리를 받기위한 API.
2. DB에 휴대폰 번호가 없는 경우 휴대폰 번호와 인증번호를 저장 하고 인증 번호 반환.
3. DB에 휴대폰 번호가 있는 경우 이를 찾아 새 인증 번호를 저장 후 반환.
   API 사용 예시:

```js
async function sendSMS() {
  const { data } = await axios({
    url: "http://15.164.228.240:8080/api/sendSMS",
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    data: (phoneNumber = 01011112222),
  });
}
```

```curl
curl -X 'POST' \
http://15.164.228.240:8080/api/sendSMS
```

```plaintext
@param {String} phoneNumber - 인증번호 메시지를 받을 전화번호 입력 (필수)
@return {Object} object
@return {Object} object.data
@return {String} object.data.password - 인증번호
```

요청 데이터 예시:

```js
phoneNumber = 01011112222;
```

응답 데이터 예시:

```json
{
  "data": {
    "password": "3000"
  }
}
```

##### 휴대폰 본인인증

로그인 시도하여 회원정보가 일치하면 JWT 토큰을 반환하는 API.

```curl
curl -X 'PUT' \
http://15.164.228.240:8080/login
```

API 사용 예시:

```js
async function sendSMS() {
  const { data } = await axios({
    url: "http://15.164.228.240:8080/api/sendSMS",
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    data: {
      phoneNumber: "01011112222",
      password: "1234",
    },
  });
}
```

```plaintext
@param {String} phoneNumber - 인증번호 메시지를 받은 휴대번호
@param {String} password - 인증번호
@return {Boolean} - 로그인 성공 여부
```

요청 데이터 예시:

```json
{
  "phoneNumber": "01011112222",
  "password": "1234"
}
```

응답 데이터 예시:

```json
true
```

#### inProgress확인

현재 사용자의 진행단계(inProgress)와 페이지 번호(pageNum)를 반환하는 API.
로그인 후 해당 API를 호출하며, 클라이언트가 checkStep1, checkStep2, checkStep3 API를 호출하여
사용자의 진행단계에 따라 이동하는 API를 호출할 수 있게
1단계/2단계를 제외한 실사요청/실사 확정/입점 완료의 경우 리턴할 데이터가 없어 바로 그 단계에 맞는 페이지로 이동하면 됨.

```curl
curl -X 'GET' \
http://15.164.228.240:8080/api/farm/checkInProgress/:phoneNumber
```

API 사용 예시:

```js
async function sendSMS() {
  const { data } = await axios({
    url: 'http://15.164.228.240:8080/api/farm/checkInProgress/:phoneNumber',
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: Bearer ACCESS_TOKEN
    },
  });
}
```

```plaintext
@return {Object} object
@return {Object} object.data - 해당 전화번호에 대한 id와 단계 정보
```

요청 데이터 예시:

```json
undefined
```

응답 데이터 예시:

```js
{
  data: {
    id : 1,
    inProgress: “INVESTIGATION_REQUEST”,
    pageNum: null
  }
}
```

#### 중간 단계 저장 확인

##### 1차

중간 저장 및 단계 확인으로 1차 검토 단계에 필요한 데이터 반환

```curl
curl -X 'GET' \
http://15.164.228.240:8080:/api/farm/:id/checkStep1
```

API 사용 예시:

```js
async function sendSMS() {
  const { data } = await axios({
    url: 'http://15.164.228.240:8080:/api/farm/:id/checkStep1',
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: Bearer ACCESS_TOKEN
    },
  });
}
```

```plaintext
@return {Object} object
@return {Object} object.data - 개인 id와 1차 프로세스에 관련된 데이터
```

요청 데이터 예시:

```json
undefined
```

응답 데이터 예시:

```json
{
  "data": {
    "id": 1,
    "pageNum": 3,
    "farmName": "농장 이름",
    "farmAddress": "농가 주소",
    "name": "농장주 이름",
    "eamil": "농장주 이메일",
    "farmPostCode": "우편 번호",
    "fodder": "사료",
    "indentification": true,
    "ownFarm": true,
    "breedingType": "비육",
    "population": "100마리 이상",
    "cctv": true,
    "livestockFarmingBusinessRegistration": true,
    "facilitiesStructure": true,
    "annualFodderCostSpecification": true,
    "annualInspectionReport": true,
    "businessLicense": true,
    "farmImage": [
      {
        "farmImageId": 1,
        "originalImageName": "우익선_농장외부사진.jpg",
        "changedImageName": "01012345678-A.jpg",
        "imageUrl": "https://~",
        "imageType": "FARM_OUTSIDE"
      },
      {
        "farmImageId": 2,
        "originalImageName": "우익선_소정면사진.jpg",
        "changedImageName": "01012345678-B.jpg",
        "imageUrl": "https://~",
        "imageType": "CATTLE_FRONT"
      }
    ]
  }
}
```

##### 2차 프로세스

중간 저장 및 단계 확인으로 2차 검토 단계에 필요한 데이터 반환

```curl
curl -X 'GET' \
http://15.164.228.240:8080:/api/farm/:id/checkStep2
```

```plaintext
@return {Object} object
@return {Object} object.data - 개인 id와 2차 프로세스에 관련된 데이터
```

요청 데이터 예시:

```json
undefined
```

응답 데이터 예시:

```json
{
  "data": {
    "id": 1,
    "farmFile": [
      {
        "farmFileId": 1,
        "fileType": "LIVESTOCK_REGISTRATION"
      },
      {
        "farmFileId": 2,
        "fileType": "STRUCTURAL_DIAGRAM"
      }
    ]
  }
}
```

##### 3차 프로세스

중간 저장 및 단계 확인으로 2차 검토 단계에 필요한 데이터 반환

```curl
curl -X 'GET' \
http://15.164.228.240:8080:/api/farm/:id/checkStep3
```

```plaintext
@return {Object} object
@return {Object} object.data - 개인 id와 실사 불가능 날짜 데이터
```

요청 데이터 예시:

```json
undefined
```

응답 데이터 예시:

```json
{
  "data": {
    "id": 66,
    "noReservationDate": [
      {
        "dateName": "삼일절",
        "date": "20220301",
        "dateType": "HOLIDAY"
      },
      {
        "dateName": "토요일",
        "date": "20220528",
        "dateType": "SATURDAY"
      },
      {
        "dateName": "일요일",
        "date": "20220529",
        "dateType": "SUNDAY"
      },
      {
        "dateName": "예약 불가",
        "date": "20220531",
        "dateType": "RESERVED"
      }
    ]
  }
}
```

---

#### 1차 프로세스

##### 약관동의 확인

약관 동의 페이지에서 얻은 boolean형식의 데이터를 PUT 요청을 통해 DB에 저장할 수 있는 API .

```curl
curl -X 'PUT' \
http://15.164.228.240:8080/api/farm/:id/agreement
```

API 사용 예시:

```js
async function sendSMS() {
  const { data } = await axios({
    url: 'http://15.164.228.240:8080/api/farm/:id/agreement',
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: Bearer ACCESS_TOKEN
    },
    data: {
      "serviceTerms1": true,
      "serviceTerms2": true,
      "serviceTerms3": false,
      "pageNum": 2
    }
  });
}
```

```plaintext
@param {Object} 약관항목 3개와 다음 페이지 넘버
```

요청 데이터 예시:

```json
{
  "serviceTerms1": true,
  "serviceTerms2": true,
  "serviceTerms3": false,
  "pageNum": 2
}
```

응답 데이터 예시:

```json
{
  "data": "ok"
}
```

##### 농장주 정보 입력

농장주 정보 Data를 PUT요청을 통해 DB에 저장하는 API.

```curl
curl -X 'PUT' \
http://15.164.228.240:8080/api/farm/:id/ownerInfo
```

API 사용 예시:

```js
async function sendSMS() {
  const { data } = await axios({
    url: 'http://15.164.228.240:8080/api/farm/:id/ownerInfo',
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: Bearer ACCESS_TOKEN
    },
    data: {
      "name": "우익선",
      "email": "wooikson@naver.com",
      "pageNum": 3
    }
  });
}
```

```plaintext
@param {Object} 농장주 이름, 이메일, 다음 페이지 넘버
```

요청 데이터 예시:

```json
{
  "name": "우익선",
  "email": "wooikson@naver.com",
  "pageNum": 3
}
```

응답 데이터 예시:

```json
{
  "data": "ok"
}
```

##### 농장 정보 입력

농장 정보 Data를 PUT요청을 통해 DB에 저장하는 API.

```curl
curl -X 'PUT' \
http://15.164.228.240:8080/api/farm/:id/info
```

API 사용 예시:

```js
async function sendSMS() {
  const { data } = await axios({
    url: 'http://15.164.228.240:8080/api/farm/:id/info',
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: Bearer ACCESS_TOKEN
    },
    data: {
      "farmName": "우익선 농장",
      "farmAddresss": "충남 천안시 ~",
      "farmPostCode": "12345",
      "fodder": "뉴트리아",
      "pageNum": 4
    }
  });
}
```

```plaintext
@param {Object} 농장 이름, 농장 우편번호, 주소, 사용하는 사료, 다음 페이지 넘버
```

요청 데이터 예시:

```json
{
  "farmName": "우익선 농장",
  "farmAddresss": "충남 천안시 ~",
  "farmPostCode": "12345",
  "fodder": "뉴트리아",
  "pageNum": 4
}
```

응답 데이터 예시:

```json
{
  "data": "ok"
}
```

#### 정보 점검

##### 농장 정보 체크

Radio Button 형식으로 받은 농장 정보 Data를 PUT요청을 통해 DB에 저장하는 API.

```curl
curl -X 'PUT' \
http://15.164.228.240:8080/api/farm/:id/infoCheck
```

API 사용 예시:

```js
async function sendSMS() {
  const { data } = await axios({
    url: 'http://15.164.228.240:8080/api/farm/:id/infoCheck',
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: Bearer ACCESS_TOKEN
    },
    data: {
      "identification": true,
      "ownFarm": true,
      "breedingType": "비육",
      "population": "100마리 이상",
      "cctv": true,
      "pageNum": 5
    }
  });
}
```

```plaintext
@param {Object} 농장에 대한 자세한 정보 점검
```

요청 데이터 예시:

```json
{
  "identification": true,
  "ownFarm": true,
  "breedingType": "비육",
  "population": "100마리 이상",
  "cctv": true,
  "pageNum": 5
}
```

응답 데이터 예시:

```json
{
  "data": "ok"
}
```

##### 서류 정보 체크

Radio Button 형식으로 받은 서류 보유 여부 Data를 PUT요청으로 DB에 저장하는 API.

```curl
curl -X 'PUT' \
http://15.164.228.240:8080/api/farm/:id/filesCheck
```

API 사용 예시:

```js
async function sendSMS() {
  const { data } = await axios({
    url: 'http://15.164.228.240:8080/api/farm/:id/filesCheck',
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: Bearer ACCESS_TOKEN
    },
    data: {
      "livestockFarmingBusinessRegistration": true,
      "facilitiesStructure": true,
      "annualFodderCostSpecification": false,
      "annualInspectionReport": true,
      "businessLicense": true,
      "pageNum": 6
    }
  });
}
```

```plaintext
@param {Object} 제출할 서류 보유 여부 점검
```

요청 데이터 예시:

```json
{
  "livestockFarmingBusinessRegistration": true,
  "facilitiesStructure": true,
  "annualFodderCostSpecification": false,
  "annualInspectionReport": true,
  "businessLicense": true,
  "pageNum": 6
}
```

응답 데이터 예시:

```json
{
  "data": "ok"
}
```

#### 농장 사진 업로드

클라이언트에서 AWS S3에 저장한 이미지 관련 데이터를 서버에 전송하는 API입니다.

```curl
curl -X 'PUT' \
http://15.164.228.240:8080/api/farm/:id/images
```

API 사용 예시:

```js
async function sendSMS() {
  const { data } = await axios({
    url: 'http://15.164.228.240:8080/api/farm/:id/images',
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: Bearer ACCESS_TOKEN
    },
    data: {
      "originalImageName": "우익선_농장_외부.jpeg",
      "changedImageName": "47_FARM_OUTSIDE.jpeg",
      "imageUrl": "https://farm-online-process.s3.ap-northeast-2.amazonaws.com/%EC%82%AC%EC%9A%A9%EC%9E%90ID%20FARM_OUTSIDE%20.jpeg",
      "imageType": "FARM_OUTSIDE"
    }
  });
}
```

```plaintext
@param {Object} AWS S3에 저장한 이미지 정보(이름, 경로, 타입)
```

요청 데이터 예시:

```json
{
  "originalImageName": "우익선_농장_외부.jpeg",
  "changedImageName": "47_FARM_OUTSIDE.jpeg",
  "imageUrl": "https://farm-online-process.s3.ap-northeast-2.amazonaws.com/%EC%82%AC%EC%9A%A9%EC%9E%90ID%20FARM_OUTSIDE%20.jpeg",
  "imageType": "FARM_OUTSIDE"
}
```

응답 데이터 예시:

```json
{
  "data": "ok"
}
```

---

#### 2차 프로세스 (필수 제출 서류 등록)

##### 필수 서류 제출

클라이언트에서 AWS S3에 저장한 파일 관련 데이터를 서버에 전송하는 API입니다.

```curl
curl -X 'PUT' \
http://15.164.228.240:8080/api/farm/:id/files
```

API 사용 예시:

```js
async function sendSMS() {
  const { data } = await axios({
    url: 'http://15.164.228.240:8080/api/farm/:id/files',
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: Bearer ACCESS_TOKEN
    },
    data: {
      "originalFileName": "우익선_신분증.jpeg",
      "changedFileName": "47_ID_CARD.jpeg",
      "fileUrl": "https://farm-online-process.s3.ap-northeast-2.amazonaws.com/%EC%82%AC%EC%9A%A9%EC%9E%90ID%20ID_CARD%20.jpeg",
      "fileType": "ID_CARD"
    }
  });
}
```

```plaintext
@param {Object} AWS S3에 저장한 이미지 정보(이름, 경로, 타입)
```

요청 데이터 예시:

```json
{
  "originalFileName": "우익선_신분증.jpeg",
  "changedFileName": "47_ID_CARD.jpeg",
  "fileUrl": "https://farm-online-process.s3.ap-northeast-2.amazonaws.com/%EC%82%AC%EC%9A%A9%EC%9E%90ID%20ID_CARD%20.jpeg",
  "fileType": "ID_CARD"
}
```

응답 데이터 예시:

```json
{
  "data": "ok"
}
```

---

#### 3차 프로세스 (실사 예정일 선택)

##### 실사 요청일 등록

선택한 실사 요청일을 서버에 전송하는 API.

```curl
curl -X 'PUT' \
http://15.164.228.240:8080/api/farm/:id/requestDate
```

API 사용 예시:

```js
async function sendSMS() {
  const { data } = await axios({
    url: 'http://15.164.228.240:8080/api/farm/:id/requestDate',
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: Bearer ACCESS_TOKEN
    },
    data: {
      "investigationRequest": "2022-02-06",
      "pageNum": 14
    }
  });
}
```

```plaintext
@param {Object} 실사 요청일 등록
```

요청 데이터 예시:

```json
{
  "investigationRequest": "2022-02-06",
  "pageNum": 14
}
```

응답 데이터 예시:

```json
{
  "data": "ok"
}
```

---

#### 단계 이동

##### 페이지 넘버 갱신

단순히 페이지를 이동할 때 페이지 번호를 Update시켜줍니다. 이는 중간 저장한 정보를 확인하여 이동시켜주는데 쓰입니다.

```curl
curl -X 'PUT' \
http://15.164.228.240:8080/api/farm/:id/move
```

API 사용 예시:

```js
async function sendSMS() {
  const { data } = await axios({
    url: 'http://15.164.228.240:8080/api/farm/:id/move',
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: Bearer ACCESS_TOKEN
    },
    data: {
      "pageNum": 7
    }
  });
}
```

```plaintext
@param {Object} 다음 페이지
```

요청 데이터 예시:

```json
{
  "pageNum": 7
}
```

응답 데이터 예시:

```json
{
  "data": "ok"
}
```

##### 입점 프로세스 진행 단계 갱신

입점 프로세스의 진행 단계를 update합니다.

```curl
curl -X 'PUT' \
http://15.164.228.240:8080/api/farm/:id/inProgress
```

API 사용 예시:

```js
async function sendSMS() {
  const { data } = await axios({
    url: 'http://15.164.228.240:8080/api/farm/:id/inProgress',
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: Bearer ACCESS_TOKEN
    },
    data: {
      "inProgress" : "STEP1_COMPLETED",
      "pageNum": 8
    }
  });
}
```

```plaintext
@param {Object} 다음 페이지
```

요청 데이터 예시:

```json
{
  "inProgress": "STEP1_COMPLETED",
  "pageNum": 8
}
```

응답 데이터 예시:

```json
{
  "data": "ok"
}
```

## 🚀 Deployment <a name = "deployment"></a>

> > 배포 추가하야함

## ⛏️ Built Using <a name = "built_using"></a>

### FE

- [Next.js](https://nextjs.org/) - Web Framework
- [redux-toolkit](https://redux-toolkit.js.org/) - 상태관리 및 데이터 패칭
- [styled-components](https://styled-components.com/) - 스타일 (CSS in JS)
- [AWS S3](https://aws.amazon.com/ko/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Categories=categories%23storage&trk=ps_a134p000006gGiOAAU&trkCampaign=acq_paid_search_brand&sc_channel=PS&sc_campaign=acquisition_KR&sc_publisher=Google&sc_category=Storage&sc_country=KR&sc_geo=APAC&sc_outcome=acq&sc_detail=s3&sc_content=S3_e&sc_matchtype=e&sc_segment=489215169070&sc_medium=ACQ-P|PS-GO|Brand|Desktop|SU|Storage|S3|KR|EN|Text&s_kwcid=AL!4422!3!489215169070!e!!g!!s3&ef_id=Cj0KCQiA0p2QBhDvARIsAACSOON95Wh5xmccoT61AnrrudAu06pEgyxu46djeqLXdgMLhqyqjAaD6KIaAtYmEALw_wcB:G:s&s_kwcid=AL!4422!3!489215169070!e!!g!!s3&awsf.Free%20Tier%20Types=*all) - 이미지 업로드 클라우드
- [Storybook](https://storybook.js.org/) - UI 개발 툴 및 테스트
- [ESLint + Prettier](https://eslint.org/) - 코드 컨벤션 툴
- [Git/GitHub](https://github.com/) - 형상 관리

### BE

- Java 11
- spring5
- spring-web
- spring-boot-devtools
- spring-data-jpa
- lombok
- gradle
- Spirng Security
- JAVA-JWT
- mysql DB
- H2 DB

## ✍️ Authors <a name = "authors"></a>

- [@imparang](https://github.com/imparang) - FrontEnd Develop
- [@dozukwang](https://github.com/dozukwang) - FrontEnd Develop
- [@imhaeunk](https://github.com/imhaeunk) - FrontEnd Develop
- [@cjsrhd94](https://github.com/cjsrhd94) - BackEnd Develop
- [@kimdaehee90](https://github.com/kimdaehee90) - BackEnd Develop
- [@limhaekyu](https://github.com/limhaekyu) - BackEnd Develop
  See also the list of [contributors](https://github.com/BancowFive) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- [@eastroots92](https://github.com/eastroots92) - FrontEnd Mentor
