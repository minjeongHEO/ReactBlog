/* eslint-disable */
import { useState } from "react";
import "./App.css";

function App() {
  const post = "강남 우동 맛집";
  let [글제목배열, 글제목배열변경] = useState([
    "남자 코트 추천",
    "여자 코트 추천",
    "간절기 아이템",
    "인기 상품",
  ]);
  let [따봉, 따봉변경] = useState(0);

  function 글제목변경하기() {
    console.log(1);
  }
  //a. state에 보관한 자료
  //b. state변경을 도와주는 함수
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "16px" }} id={post}>
          블로그임
        </h4>
      </div>
      //버튼을 누르면 첫 글 제목이 '여자 코트 추천'으로 바뀌는 기능의 버튼을
      만들어봅시다.
      {글제목배열.map((i) => (
        <div className="list">
          <h4>
            <span onClick={() => 글제목배열변경(따봉 + 1)}>{i} </span>
            <span onClick={() => 따봉변경(따봉 + 1)}>좋아요🖤</span> {따봉}
          </h4>
          <p>2월 17일 발행</p>
        </div>
      ))}
      {/* <div className="list">
        <h4>{글제목배열[0]}</h4>//인덱싱
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목배열[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목배열[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
    </div>
  );
}

export default App;
