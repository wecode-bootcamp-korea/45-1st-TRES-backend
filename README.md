<h1>TRES<h1>

<div align="center">
<img src= "https://github.com/wecode-bootcamp-korea/45-1st-TRES-backend/assets/126100135/d2883bf1-c1c5-4ca4-9d9b-6f62eb38e6fc">
</div>

## FrontEnd
- <a href="YOUR_LINK_HERE">김태원<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>
- <a href="https://github.com/jeonga-yeon">연정아<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>
- <a href="YOUR_LINK_HERE">양진민<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>
- <a href="YOUR_LINK_HERE">전승범<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>

## BackEnd
- <a href="https://github.com/innichang">장인석(Inseok Chang)<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"></a>
- <a href="https://github.com/msj102525">문승종<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"></a>
- <a href="https://github.com/haaazzi">하지현<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"></a>
  
<div align="center"><h1>STACKS</h1></div>
  </br>
<div align="center">FRONTEND</div>
  <div align="center">
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
    <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
      <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=red"> 

  </div>
</br>
<div align="center">BACKEND</div>
<div align="center">
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
  <img src="https://img.shields.io/badge/TypeORM-262627?style=for-the-badge&logo=TypeORM&logoColor=white">
</div>
</br>
<div align="center">CO-OP TOOLS</div>
<div align="center">  
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white">
  <img src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=Trello&logoColor=white">
  <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">
</div>
</br>

------------------------------------------------------------------------------------------------------------
## About TRES 
<div>
  <h1>True Ramen Execute Statement</h1>
  <h3>Execute Statement if(Ramen) it is True</h3>
  <h>참이라면 실행하라 라는 의미를 가지고 있습니다.</h2>
</div>
<br>
<br>
## 로그인/회원가입
<img src=web-images/login.jpg>
이메일 입력을 통한 회원가입 또는 로그인으로 이어집니다. 회원가입 도중 선호하는 음식의 국가를 선택하여 미래에 웹사이트를 이용할때, 그에 맞는 추천 음식의 대한 정보를 전달 받습니다.
<br>
[FE]<br>
이메일/비밀번호에 대한 실시간 유효성 검사로 유저들이 번거로움 완화
<br>
[BE]<br>
로그인시 유저의 고유 id가 담긴 숫자를 JWT를 통해 보내, 유저가 API와 통신 요청시 항상 id를 체크하여 동작
Bcrypt를 사용한 password hashing으로 유저 정보 보안 강화
<br>
<br>
## 메인페이지/네비게이션 바
<img src=web-images/main.jpg>
큰 카테고리들을 통하거나, 배너를 통해 상세 페이지로 넘어갈 수 있습니다. 로그인 상태를 알려 줍니다.
<br>
[FE]<br>
여러 캐러셀을 통해 많은 정보를 전달합니다. 
<br>
[BE]<br>
확장성을 고려해 클라이언트가 요청한 네비게이션바에 들어가는 대륙과 나라에 대한 정보를 전달합니다. 앞으로 서비스 가능한 나라들이 많아지게되면, 클라이언트의 하드코딩이 아닌, DB의 정보에 따른 카테고리 확장이 가능합니다. 
<br>
## 상품 리스트
<img src=web-images/product_list.jpg>
필터 기능을 구현해 사용자들이 자신의 입맛에 맞게 상품을 필터링/정렬을 할 수 있습니다. 또한, 보기 편하도록 한국어와 영어로 음식의 이름이 표기되어잇고, 한 줄에 3개의 상품을 나열하였습니다. 사용자들은 현재 인기 상품에 흥미가 생기는 경향이 잇고, 가격순으로 결정하는 경우가 있기 때문에 인기순, 가격순으로 정렬할 수 있는 기능을 구현했습니다. 
<br>
<br>
[FE]<br>
맵기, 대륙별, 나라별, 알러지별, 육류별과 같은 다양한 필터를 넣어 사용자들이 더욱 더 자신에게 맞는 음식을 수월하게 찾을 수 있도록 구현
<br>
[BE]<br>
Filter Builder를 제작해 다양한 합집합/교집합의 요청이 와도 그에 맞는 정보를 전달 가능
조건문을 사용한 base query, condition query, sorty query와 limit query를 스트링으로 연결해 query문을 보냄
<br>
## 상품 상세
<img src=web-images/product_detail.jpg>
이름,가격,알러지 여부, 채식여부, 상품의 대한 설명 등과 같은 정보들을 상세 페이지에서 표시함으로, 사용자들은 정확한 정보를 통해 상품에 대한 구매 의사 결정. 
<br>
[FE]<br>
상품 상세 설명, 리뷰등과 같은 nav bar 버튼 클릭시 오토 스크롤로 해당 구역으로 이동. 유저들이 일일히 스크롤해야하는 번거로움 제거
<br>
[BE]<br>
클라이언트에서 요청하는 상품에 대한 상세 정보를 이미 가공된 형태로 전달해, 클라이언트가 더 쉽게 정보를 나열 할 수 있도록 도와줍니다.
<br>
<br>
## 장바구니
<img src=web-images/payment.jpg>
장바구니에 추가한 음식을 나열해서 목록으로 보여주고 제품목록에서 구매하려는 제품을 선택 시 제품들의 총 금액을 보여줍니다. 그리고 추천 제품 목록에서 추천하는 음식을 보여줍니다.
<br>
[FE]<br>
수량변경 기능과 개별/선택 삭제 기능을 추가해, 혹여 자신이 이미 담아놓은 제품의 내역에 대해 변경을 넣어주고 싶다면, 쉽게 해당 페이지에서 가능. 또한, 미리 총 결제 금액을 보여주면서 잘못 선택한 제품이 있는지, 예상했던 계획과 일치하는지 확인할 수 있게함.
<br>
[BE]<br>
DB가 주문 물품을 담아놓는 order_items 테이블, 주문 내역을 담아 놓는 orders 테이블로 관리되어, Transaction으로 장바구니 상품 삭제 기능을 구현. (어떻게 더 효율적으로 주문 물품/주문내역/장바구니를 관리하고, 과거 주문 내역을 저장할 지 더 생각해볼 예정)
<br>
<br>
## 결제
<img src=web-images/payment.jpg>
회원가입시 입력했던 배송지가 기본 배송지로 설정되어 있고 보유하고 있는 포인트와 총결제 비용을 통해 결제가 가능한지 확인합니다.
<br>
[FE]<br>
사용자가 편하게 이미 입력해놓은 배송 정보를 사용 할 수 있는 선택이 존재하고, 다른 배송지를 사용하고 싶다면 새로 입력 가능. 프론트 딴에서 먼저 백에서 넘겨 받은 사용자 보유 포인트 정보로 결제 이전에 계산하여, 결제 버튼 활성화/비활성화. 
<br>
[BE]<br>
프론트에서 이미 한번 계산을 통해 걸러 들어온 데이터를 더 확실하게 처리하기 위해, 백에서 한번더 보유 포인트와, 결제비용을 비교해서, 가능치 않으면 불가능 메시지 출력, 계산이 가능하면 Transaction을 이용한 처리. Transaction 중 에러 발생시, 모든 결제에 대한 동작 및 정보가 소멸.  
<br>








