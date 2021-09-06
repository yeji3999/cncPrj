# 가공설비(CNC) 툴 모니터링 시스템
## Project description

**CNC 툴 부하 모니터링 UI**

## 인덱스 화면
 **메뉴 구조: Workshop->Line->Operation**
 
1. **전체 공장 화면**
<img width="1000" src="https://user-images.githubusercontent.com/37472764/131939347-498eb22f-eee9-4440-958f-0c6b41d0ae1d.png">

2. **공장 선택 후 화면**
**라인 선택 가능**
<img width="1000" src="https://user-images.githubusercontent.com/37472764/131939696-396eb487-d586-4e9c-ae13-d7c432ae9c78.png">

3. **라인 선택 후 화면**
**공정 선택 가능**
<img width="1000" src="https://user-images.githubusercontent.com/37472764/131940114-90773a89-0315-4824-81c2-a882afe3d7a1.png">


## 공정 화면
<img width="1000" src="https://user-images.githubusercontent.com/37472764/131941274-b50fdcdd-763e-4601-bcb6-97e4441fbfd7.png">

**특정 공정에 접근 시, 선택한 공정의 위치 표시**
<img width="1000" src="https://user-images.githubusercontent.com/37472764/125713829-fa5c16f6-f24e-48c6-8825-bce0afba7f08.png">

### 상단 메뉴
1. **인덱스 페이지로 이동**

2. **레이아웃 변경**
<img width="500" src="https://user-images.githubusercontent.com/37472764/131951939-cbe48277-84f8-413b-833d-8ac8915f2e03.PNG">

**- 레이아웃1**
<img width="1000" src="https://user-images.githubusercontent.com/37472764/131941274-b50fdcdd-763e-4601-bcb6-97e4441fbfd7.png">

**- 레이아웃2**
<img width="1000" src="https://user-images.githubusercontent.com/37472764/131941321-fb6ede5d-16d0-48a6-a904-062f75cc4f3d.png">

**- 레이아웃3**
<img width="1000" src="https://user-images.githubusercontent.com/37472764/131941352-39cf5d91-97dd-485d-9ec7-7bcfa5ed590c.png">

3. **학습 모델 변경(Admin User)**
<img width="500" src="https://user-images.githubusercontent.com/37472764/125897349-1378edb9-b5b5-46c5-8591-8ac98c172c20.png">

### AI를 통해 제품의 양품 / 불량품 판정

1. **제품의 시리얼 넘버**
2. **FFT 변환 이미지**
3. **양품 / 불량품 여부**
<img width="500" src="https://user-images.githubusercontent.com/37472764/131952053-c1c1321f-57bd-48f0-adda-3ba8a0aa9285.png">

###### **비정상 시, 툴 부하 또는 툴 마모 여부 확인 가능**

### 공정의 가동 현황 및 AI 판정 값
+ ### 공정의 가동 현황
<img width="1000" src="https://user-images.githubusercontent.com/37472764/125896958-512a0fb0-a57b-4d02-94f7-2138431377a5.png">

1. **Running status** <br> 공정의 가동 상태 여부
2. **Total production** <br> 실시간 데이터를 이용해 산출한 공정의 제품 총 생산량<br>
**- Production history** <br> 일간, 주간, 월간 누적 생산량 확인
<img width="1000" src="https://user-images.githubusercontent.com/37472764/125715526-8b9bbd50-4ab1-4c41-8e28-c156058715da.png">

3. **Cycle Time** <br> 최근 5개의 cycle time 평균<br>
**- Cycle time history** <br>최근 10개의 cycle time 그래프, 최근 100개의 cycle time 값
<img width="1000" src="https://user-images.githubusercontent.com/37472764/125715418-540da10e-2f8f-4482-832c-e507d243db9a.png">

+ ### AI를 통한 판정 값
<img width="1000" src="https://user-images.githubusercontent.com/37472764/125896819-4051a916-6fe2-4e91-81de-b7b49912e437.png">

1. **MAE** <br> MAE 수치 확인
2. **Anomaly Detection** <br> 이상 데이터 확인
### 부하량 및 로스율 차트
+ ### Chart Interval Setting
<img width="1000" src="https://user-images.githubusercontent.com/37472764/120174285-e2478c00-c23f-11eb-8da9-ef9e540aae1b.png">

1. **데이터를 확인할 time range 설정**
2. **time range 기준으로 시간 줌 아웃**
3. **대시보드 리프레시**
4. **리프레시 간격 설정**

+ ### Chart

1. **Real Time Load Trands, MAE, Spindle Load Chart** <br> 실제 부하량과 AI를 통한 예측 부하량 + 실제 로스율과 예측 로스율의 차이 + 실시간 부하량
<img width="1000" src="https://user-images.githubusercontent.com/37472764/125899438-283b3f4a-14a4-435f-8b5e-f31f0614bb7a.png">

2. **Load Trands & AI Predict** <br> 실제 부하량과 AI를 통한 예측 부하량
<img width="1000" src="https://user-images.githubusercontent.com/37472764/120173027-98aa7180-c23e-11eb-95b1-234930cc31c4.png">

3. **Real vs Predict Loss (MAE)** <br> 실제 로스율과 예측 로스율 차이
<img width="1000" src="https://user-images.githubusercontent.com/37472764/120173125-ae1f9b80-c23e-11eb-8f11-157c13112170.png">

4. **Real Time Spindle Load** <br> 실시간 부하량
<img width="1000" src="https://user-images.githubusercontent.com/37472764/120173208-c5f71f80-c23e-11eb-9cb8-c119aa8f6c7c.png">


--- 
--- 

## Project Setup
```
npm install
```
### vue cli install

```
npm install -g @vue/cli
vue --version
```

### vue project create

```
vue create <project-name>
```

#### **프로젝트 구조**
 + /public <br> index.html이나 favicon과 같이 정적 파일들이 보관되는 폴더
 + /src <br> 대부분의 프로젝트에서 코딩한 내용들은 이 폴더에서 작성하며, 컴포넌트나 컴포넌트에 들어갈 어셋, 라우터, store들을 보관하는 폴더

#### **생성할 컴포넌트 위치**

src/components 폴더에 vue 확장자로 원하는 컴포넌트를 만든다.

#### **컴포넌트 기본 구조**
```
<template>
  <div></div>
</template>

<script>
  export default {};
</script>

<style scoped></style>
```
#### **컴포넌트 연결**
```
<template>
  <div id="app">
    <AIPanel></AIPanel>
  </div>
</template>

<script>
  import AIPanel from "./components/AIPanel";

  export default {
    name: "app",
    components: {
      AIPanel
    }
  };
</script>

<style></style>
```
만약 구현한 컴포넌트 이름이 AIPanel 이라면, 위와 같이 script에서 import한 뒤 components 옵션으로 등록하고 커스텀 태그를 등록.

#### **vue에 unity 연결**

```
<unity src="../../../Build/Build_Web.json" unityLoader="../../../Build/UnityLoader.js" ref="gameInstance" id="gameContainer"></unity> 
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### dependencies

    "vue": "^2.6.12"
    "@vue/cli": "^4.5.12"
    "vuex": "^3.6.2"
    "chart.js": "^2.9.4"
    "node": "^14.16.1"
    "npm": "^6.14.12"
    "vue-unity-webgl": "^1.2.0"
    

--- 
--- 

## Socket 이벤트

### CT 이벤트
1. **cycleTimeMean** <br> CT 평균 데이터 호출
2. **ctHistory** <br> CT history 100개 데이터 호출
3. **ctChart** <br> CT history bar chart 생성을 위해 CT history 10개 데이터 호출

### Total Production
1. **count** <br> 공정에서 발생한 생산량 토탈 카운트 데이터 호출
2. **days** <br> 일간 누적 생산량 데이터 호출
3. **weeklys** <br> 주간 누적 생산량 데이터 호출
4. **monthlys** <br> 월간 누적 생산량 데이터 호출

### Running Status
1. **isWork** <br> 공정의 가동, 비가동 여부를 알리는 데이터 호출

### MAE
1. **realtimeLoss** <br> MAE 데이터 호출

### Anomaly Detection
1. **anomalyDetection** <br> 이상 데이터 판정 여부 호출

### Admin Model Change
1. **nowModelInfo** <br> 현재 동작중인 모델 정보 호출

### Product Quailty
1. **qualityPredictStart** <br> 품질 예측 시작 호출
2. **qualityPredictEnd** <br> 품질 예측 종료 호출
