<!-- 필수 항목 -->

## 카테고리

| Application | Domain | Language | Framework |
| ---- | ---- | ---- | ---- |
| :white_check_mark: Desktop Web | :black_square_button: AI | :white_check_mark: JavaScript | :black_square_button: Vue.js |
| :white_check_mark: Mobile Web | :black_square_button: Big Data | :black_square_button: Html | :white_check_mark: React |
| :white_check_mark: Responsive Web | :black_square_button: Blockchain | :black_square_button: C/C++ | :black_square_button: Angular |
| :black_square_button: Android App | :black_square_button: IoT | :black_square_button: C# | :black_square_button: Node.js |
| :black_square_button: iOS App | :black_square_button: AR/VR/Metaverse | :black_square_button: Python | :black_square_button: Flask/Django |
| :black_square_button: Desktop App | :black_square_button: Game | :white_check_mark: Java | :white_check_mark: Spring/Springboot |
| | | :black_square_button: Kotlin | |

<!-- 필수 항목 -->

## 프로젝트 소개

* 프로젝트명: 카페(디저트) 큐레이션 기반 SNS
* 서비스 특징: 웹/모바일(웹 디자인) 스켈레톤 프로젝트
* 주요 기능
  - 회원 관리
  - 관심사로 등록된 피드 확인
  - SNS 기능 (피드, 팔로우/언팔로우, 댓글, 좋아요)
  - 지도를 통한 점포 가독성
* 주요 기술
  - JPA
  - React
  - JWT Authentication
  - REST API
* 참조 리소스
* 배포 환경
  - URL: 
  - 테스트 계정: 

<!-- 자유 양식 -->

## 팀 소개
* 박주한: 팀장, 프론트엔드 개발
* 이승현: 부팀장, 백엔드 개발
* 박소희: 백엔드 개발 
* 서은민: 백엔드 개발
* 정동균: 프론트엔드 개발
* 유병재: 프론트엔드 개발

<!-- 자유 양식 -->

## 프로젝트 상세 설명
* 기획 <br>
  * **회원 가입**
    * 자체 회원가입
      * 외부로부터 필요한 데이터 값(이메일)을 입력받는다.
      * 이미 존재한 회원일 경우 메시지(이미 존재하는 회원입니다)반환
      * 존재하지 않은 회원일 경우 (a.)에 데이터값은 인증이 필요하다. 
      * 인증에 성공하면 추가 데이터값(비밀번호, 아이디), 프로필 사진을 입력받는다.
      * 비밀번호는 영문+숫자+특수문자 모두 포함(최소 8자, 최대 15자)해야 한다.
      * 아이디 영문+숫자+특수문자(“_ , -, .”)(최소 4자, 최대 10자)(영문 or 숫자 필수 입력) 여야 한다.
      * 아이디는 중복 불가여야 한다.
      * 프로필 사진을 등록하지 않으면 null이 입력된다. (null일 경우 기본 이미지 제공)
      * 프로필 사진을 제외한 값을 전부 입력하지 않으면 에러를 리턴한다. (프로필 사진을 제외한 컬럼은 모두 Not Null)
    * SSO (OAuth. 네이버, 카카오, 구글 로그인)
      * 회원 가입 후 아이디 입력을 해야한다.
      * 아이디 영문+숫자+특수문자(“_ , -, .”)(최소 4자, 최대 10자)(영문 or 숫자 필수 입력) 여야 한다.
      * 아이디는 중복 불가여야 한다. <br><br>

  * **관심사 선택**
    * 관심사는 최소 0개 최대 3개 선택할 수 있다. <br><br>

  * **회원 프로필 조회 - 로그인된 본인 계정만 조회 가능 (참고: 인스타 프로필 편집)**
    * 회원 정보(아이디, 프로필 사진, 소개, 이메일, 관심사)가 조회된다. <br><br>

  * **회원 프로필 수정 - 로그인된 본인 계정만 수정 가능**
    * 아이디, 프로필 사진, 소개를 수정할 수 있다.
      * 아이디 영문+숫자+특수문자(“_ , -, .”)(최소 4자, 최대 10자)(영문 or 숫자 필수 입력) 여야 한다. (중복 불가)
      * 프로필 사진은 기본 프로필 사진으로도 변경할 수 있다.
      * 아이디는 반드시 입력되어야 한다.
    * 비밀번호 수정
      * 비밀번호는 영문+숫자+특수문자 모두 포함(최소 8자, 최대 15자) <br><br>

  * **회원 페이지**
    * 기본 기능 (모든 방문자가 사용 가능한 기능)
      * 피드 조회 및 상세 보기 가능하다.
      * 게시물 / 팔로워 / 팔로잉 수 확인 가능하다.
      * 팔로워 / 팔로잉 목록 조회할 수 있다.
      * 게시물은 최신순으로 보여진다.
    * 로그인 후 본인 계정의 페이지 방문 시
      * 게시글 CRUD 가능
    * 로그인 후 회원이 타인 계정 방문 시
      * 팔로우 / 언팔로우 <br><br>

  * **로그인**
    * 이메일과 비밀번호를 입력받는다. or SSO (OAuth. 네이버, 카카오, 구글 로그인)
    * 회원 가입된 이메일과 비밀번호라면 Token을 리턴한다.
    * 회원 가입된 이메일과 비밀번호가 아니라면 에러를 리턴한다. <br><br>

  * **메인 화면 : 검색창, 지도, 피드**
    * 지도
      * 내 위치 기반으로 주변 카페 검색
      * 내 위치 제공 불허용 사용자일 경우 지도 초기 마커 기반으로 카페 검색
    * 피드
      * 로그인 : 관심사 기반 + 내가 팔로우한 사람의 게시글 + 나의 게시글 최신순으로 조회
      * 그 외 : 랜덤으로 피드가 보여짐
      * 관심사, 팔로우한 사람, 내가 작성한 글 모두 없으면
      * 로그인을 하지 않았을 경우 등 <br><br>

  * **검색 (로그인한 회원만 사용 가능)**
    * 검색창은 탭
    * 장소 검색
      * 검색 기반의 카페가 지도에 표시
      * 동 검색
        * 해당 동의 카페가 지도에 표시 및 해당 카페 목록이 노출
    * 카테고리 검색
      * 카테고리가 포함된 피드 목록 조회
      * 정렬 기준은 인기순 / 최신순
    * 카페 검색
      * 해당 카페의 위치가 지도에 표시
      * 카페의 상세 정보 확인 가능
      * 해당 카페가 등록된 피드 목록 조회 <br><br>

  * **지도**
    * 지도에 표시된 카페 선택 시 토글 생성
    * 카페 정보 (카페 사진, 카페 이름, 카페 주소(위치). 메뉴 정보, 리뷰)
    * 카페 SNS
    * 카페 키워드 <br><br>

  * **댓글 (로그인한 회원만 사용 가능)**
    * 등록
      * 내용 작성 안 했을 시 등록 불가
    * 조회
      * 첫 번째 댓글
        * 작성자 프로필 사진, 작성자 아이디, 내용, 작성일, 좋아요 수, 로그인한 회원이 좋아요 눌렀는지에 대한 여부 조회
      * 대댓글
        * 첫 번째 댓글과 동일하나 부모 댓글 작성자의 아이디가 함께 조회
      * 좋아요 수 클릭시 좋아요를 누른 회원 목록 조회
        * 누른 회원의 프로필 사진, 아이디, 로그인한 회원이 해당 회원을 팔로우 했는지에 대한 여부 조회 
    * 삭제
      * 첫 번째 댓글 삭제 시 대댓글도 전부 삭제
      * 대댓글이 삭제됐을 시 해당 댓글만 삭제 
    * 좋아요 / 좋아요 취소
      * 빈 하트 클릭시 좋아요
      * 채워진 하트 클릭시 좋아요 취소 <br><br>

  * **게시물**
    * 등록
      * 사진, 내용, 카페 이름(카페 이름 자동완성 가능하다면!), 키워드 입력.
      * 사진과 카페 이름, 키워드는 필수이다.
      * 카페 검색창을 통해 게시글과 해당 카페를 연동
        * 카페 등록은 선택
      * 키워드 버튼을 통해 연동된 카페에 부합하는 키워드 등록 
        * 카페 등록 시 키워드 등록은 선택
        * 카페 미등록 시 키워드 등록 불가
    * 조회
      * 사진, 내용, 작성자 프로필 사진, 작성자 아이디, 작성일, 카페명, 키워드 조회
      * 좋아요, 북마크, 댓글 기능 존재
    * 목록 
      * 피드 형식
        * 사진 중심
        * 일정 개수만큼 게시글을 불러오고, 밑으로 스크롤 하면 추가로 게시물을 불러온다. 
        * (페이징은 보여줄 게시글을 교체하는 방식이고 이거는 교체가 아니라 추가하는 방식)
      * 게시판 형식
        * 사진, 카페 이름, 내용, 키워드, 좋아요 수, 작성일
          * 카페 이름 미 등록 시 목록에 노출 x
    * 삭제
      *게시물에 등록된 댓글과 북마크, 좋아요도 삭제된다. <br><br>

  * **좋아요 - 로그인 시에만 사용 가능**
    * 회원일 경우에만 좋아요. 버튼 활성
    * 하트 클릭으로 좋아요, 취소 가능
    * 색이 채워진 하트일 경우 좋아요가 된 상태, 색이 비워진 하트일 경우 좋아요가 안된 상태 <br><br>

  * **북마크**
    * 회원일 경우에만 북마크 버튼 활성
    * 북마크 아이콘 클릭으로 북마크 저장, 취소 가능
    * 색이 채워진 북마크일 경우 북마크가 된 상태, 색이 비워진 북마크일 경우 북마크가 안된 상태
    * 북마크 한 게시물 모아보기 가능 <br><br>

  * **팔로우**
    * 게시물을 보고 싶은 유저를 팔로우하면 팔로우 중으로 변경
    * 팔로우 버튼을 재 클릭하면 언팔로우 <br><br>

  * **비밀번호 찾기**
    * 이메일 인증 후 임시 비밀번호 발급 후 비밀번호 변경 <br><br>

  * **탈퇴**
    * 회원 탈퇴 시 회원 테이블에서 데이터 삭제
    * 해당 회원이 작성한 모든 게시글 삭제
    * 팔로우/팔로워 삭제 <br><br>

___

* 와이어프레임 <br>
  ![와이어1](/uploads/808232cc248a1f22b7c50fded277ad9a/와이어1.JPG) 
  ![와이어2](/uploads/a168143446bf5ca3a7efdf52f799b072/와이어2.JPG)
  ![와이어3](/uploads/83b9d1a5bd97a7d04a261ff896c121fc/와이어3.JPG)
  ![와이어4](/uploads/ec3125ef96cd73eb2be73cd8889781f3/와이어4.JPG)
  ![와이어5](/uploads/2fafa3282621f0ff47cd99aec5d0e317/와이어5.JPG)

* ERD <br>
  ![ERD](uploads/caffe_in_erd.png)
