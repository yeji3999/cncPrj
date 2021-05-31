# 가공설비(CNC) 툴 모니터링 시스템

## 화면 구성
**타이틀, 메뉴, 가동 현황 및 AI 판정 값, 부하량 및 오차율 차트**

### 메뉴
1. **공장->라인->공정**
2. **특정 공정에 접근 시, 선택한 공정의 위치 표시**
3. **공정 별 가동 현황 및 AI를 활용한 부하량 예측 (추후 개발 예정)**
4. **메뉴 닫힘, 펼침 기능**
### 공정의 가동 현황 및 AI 판정 값
#### 공정의 가동 현황
1. **Running status** <br> 공정의 가동 상태 여부
2. **Total production** <br> 실시간 데이터를 이용해 산출한 공정의 제품 총 생산량
**- Production history** 
<img width="600" src="https://user-images.githubusercontent.com/37472764/120142989-46eff000-c21a-11eb-979c-9a90bfd99b5c.PNG">
일간, 주간, 월간 누적 생산량 확인

3. **Cycle Time** <br> 최근 5개의 cycle time 평균
**- Cycle time history**  
<img width="600" src="https://user-images.githubusercontent.com/37472764/120143326-e57c5100-c21a-11eb-8538-2e724ffd87db.PNG">
최근 10개의 cycle time 그래프, 최근 100개의 cycle time 값
#### AI를 통한 판정 값
1. **MAE** <br> 실제 값과 예측 값의 차이
2. **Anomaly Detection** <br> 이상 데이터 감지
### 부하량 및 로스율 차트
#### Chart Interval Setting
1. **데이터를 확인할 time range 설정**
2. **time range 기준으로 시간 줌 아웃**
3. **대시보드 리프레시**
4. **리프레시 간격 설정**
#### Chart
1. **Load Trands & AI Predict** <br> 실제 부하량과 AI를 통한 예측 부하량
2. **Real vs Predict Loss (MAE)** <br> 실제 로스율과 예측 로스율 차이
3. **Real Time Spindle Load** <br> 실시간 부하량
