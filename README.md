# 가공설비(CNC) 툴 모니터링 시스템
## Project description
**CNC 툴 부하 모니터링 UI**
## 전체 화면
<img width="1000" src="https://user-images.githubusercontent.com/37472764/120403329-f04ff680-c37e-11eb-8ac4-bc2f6cca4de4.PNG">

## 레이아웃 구성
<img width="1000" src="https://user-images.githubusercontent.com/37472764/120174561-2f2b6280-c240-11eb-92e6-27b5d535601d.png">

1. **헤더**
2. **메뉴**
3. **콘텐츠 영역**


### 메뉴
1. **메뉴 구조: Workshop->Line->Operation**
<img width="300" src="https://user-images.githubusercontent.com/37472764/125712270-da576522-9a22-4380-a673-54f15e1242e8.png">

2. **공정 별 가동 현황 및 AI를 활용한 부하량 예측 (추후 개발 예정)**
3. **특정 공정에 접근 시, 선택한 공정의 위치 표시**
<img width="1000" src="https://user-images.githubusercontent.com/37472764/125713829-fa5c16f6-f24e-48c6-8825-bce0afba7f08.png">

4. **메뉴 닫힘, 펼침**
<img width="1000" src="https://user-images.githubusercontent.com/37472764/120403625-8421c280-c37f-11eb-86dd-67674afd8ec4.png">

### 상단 메뉴
1. **레이아웃 변경**
2. **학습 모델 변경(Admin User)**

### 공정의 가동 현황 및 AI 판정 값
+ ### 공정의 가동 현황
<img width="1000" src="https://user-images.githubusercontent.com/37472764/120170777-48321480-c23c-11eb-9b54-a8ac955820f7.png">

1. **Running status** <br> 공정의 가동 상태 여부
2. **Total production** <br> 실시간 데이터를 이용해 산출한 공정의 제품 총 생산량<br>
**- Production history** <br> 일간, 주간, 월간 누적 생산량 확인
<img width="1000" src="https://user-images.githubusercontent.com/37472764/125715526-8b9bbd50-4ab1-4c41-8e28-c156058715da.png">

3. **Cycle Time** <br> 최근 5개의 cycle time 평균<br>
**- Cycle time history** <br>최근 10개의 cycle time 그래프, 최근 100개의 cycle time 값
<img width="1000" src="https://user-images.githubusercontent.com/37472764/125715418-540da10e-2f8f-4482-832c-e507d243db9a.png">

+ ### AI를 통한 판정 값
<img width="1000" src="https://user-images.githubusercontent.com/37472764/120251145-87537a80-c2bb-11eb-951f-df0ff9084dc0.png">

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

1. **Load Trands & AI Predict** <br> 실제 부하량과 AI를 통한 예측 부하량
<img width="1000" src="https://user-images.githubusercontent.com/37472764/120173027-98aa7180-c23e-11eb-95b1-234930cc31c4.png">

2. **Real vs Predict Loss (MAE)** <br> 실제 로스율과 예측 로스율 차이
<img width="1000" src="https://user-images.githubusercontent.com/37472764/120173125-ae1f9b80-c23e-11eb-8f11-157c13112170.png">

3. **Real Time Spindle Load** <br> 실시간 부하량
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
    

--- 
--- 

## Socket 이벤트

### CT 이벤트
1. **cycleTimeMean** <br> CT 평균 데이터 호출
2. **cycleTimeHistory** <br> CT history 100개 데이터 호출
3. **ctChart** <br> CT history bar chart 생성을 위해 CT history 10개 데이터 호출

### Total Production
1. **count** <br> 공정에서 발생한 생산량 토탈 카운트 데이터 호출
2. **days** <br> 일간 누적 생산량 데이터 호출
3. **weeklys** <br> 주간 누적 생산량 데이터 호출
4. **monthlys** <br> 월간 누적 생산량 데이터 호출

### Running Status
1. **isWork** <br> 공정의 가동, 비가동 여부를 알리는 데이터 호출

### MAE
1. **loss** <br> MAE 데이터 호출

### Anomaly Detection
1. **anomalyDetection** <br> 이상 데이터 판정 여부 호출

### Admin Model Change
1. **nowModelInfo** <br> 현재 동작중인 모델 정보 호출
