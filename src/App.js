/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {
  const post = '강남 우동 맛집';
  let [글제목배열, 글제목배열변경] = useState([
    '남자 코트 추천',
    '여자 코트 추천',
    '간절기 아이템',
    '인기 상품',
  ]);
  let [따봉, 따봉변경] = useState(0);

  function 제목변경(text, i) {
    //글제목배열변경[i] = '여자';
    const newArray = [...글제목배열]; // 기존 배열 복사
    newArray[i] = '읽은 포스팅'; // 원하는 변경 값 할당
    글제목배열변경(newArray); // 상태 변경 함수 호출
  }
  //a. state에 보관한 자료
  //b. state변경을 도와주는 함수
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'red', fontSize: '16px' }} id={post}>
          블로그임
        </h4>
      </div>
      {글제목배열.map((text, i) => (
        <div className="list">
          <h4>
            <span onClick={() => 제목변경(text, i)}>{text} </span>
            <span onClick={() => 따봉변경(따봉 + 1)}>🖤👍</span> {따봉}
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
