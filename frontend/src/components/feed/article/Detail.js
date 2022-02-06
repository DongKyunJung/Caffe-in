import React,{useEffect,useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { FiCornerUpLeft } from 'react-icons/fi';
import './css/Detail.css'
import Comment from "./Comment";
import axios from 'axios';

export default function Detail() {

  const history = useHistory();
  
  return (
    <Container >
      {/* 뒤로 가기 버튼 */}
      <div>
        <FiCornerUpLeft size="30" onClick={() => { history.goBack() }} />
      </div><br />

      {/* 게시물 컨테이너 */}
      <div id='article_con'>
        <Row  style={{ justifyContent: "space-around"}}>
          {/* 사진 창 */}
          <Col id='article_frame' xs={12} md={5} lg={6}>
            <img 
              src='/test/4.3.png'
              id='article_article_img'
            />
          </Col>

          {/* 게시물 창 */}
          <Col id='article_frame' xs={12} md={7} lg={5}>
            {/* 유저프로필,작성일 */}
            <div id='article_profile_info'>
              <div style={{display:"flex"}}>
                <div id="article_profile_frame">
                  <img id="article_profile_prof_img" 
                  src={process.env.PUBLIC_URL + "/image/hello.png"}
                  />
                </div>
                <div id='article_username'>
                  <p>username</p>
                </div>
              </div>
              <div id='article_profile_date'>
                <h5>2022년 1월 1일</h5>
              </div>
            </div>
            
            {/* 카페이름 */}
            <div id='article_cafe_name'>
              <a href="#">OOcafe</a>
            </div>

            {/* 본문내용, 카페관심사태그 */}
            <div id='article_body'>
              {/* 본문 내용  */}
              <div id='article_content_frame'>
                <div di='article_content'>
                  contentcontentcontentcontentcontentcontent<br/>
                  contentcontentcontentcontentcontentcontent<br/>
                  contentcontentcontentcontentcontentcontent<br/>
                  contentcontentcontentcontentcontentcontent<br/>
                  contentcontentcontentcontentcontentcontent<br/>
                </div>
              </div>
              {/* 관심사 카테고리 표시 폼 */}
              <div id='article_category'>
                <p id='article_category_content' style={{ backgroundColor:"skyblue"}}>공부하기 좋은 카페</p>
                <p id='article_category_content' style={{ backgroundColor:"tomato" }}>공부하기 좋은 카페</p>
              </div>
            </div>

            {/* 하트 & 북마크*/}
            <div id='article_heart_bookmark'>
              <div style={{marginRight:"3%"}}>💓</div>
              <p style={{marginRight:"3%"}}>30</p>
              <div style={{marginRight:"3%"}}>🔖</div>
              <p style={{marginRight:"3%"}}>북마크</p>
            </div>

            <div id='article_comment'>
              <Comment />
            </div>
            </Col>
          </Row>
        </div>
    </Container>
  )
}
