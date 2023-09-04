/* eslint-disable */
/** 11 분🌙 input 1 : 사용자가 입력한 글 다루기 : 강의 들었음 */
import { useState } from 'react';
import './App.css';

function App() {
  const post = '강남 우동 맛집';
  let [글제목배열, 글제목배열변경] = useState(['남자 코트 추천', '여자 코트 추천', '간절기 아이템', '인기 상품']);
  let [따봉, 따봉변경] = useState([0, 0, 0, 0]);
  let [modalState, setModalState] = useState(false);
  let [index, setIndex] = useState(0);
  let [입력값, 입력값변경] = useState('');

  //*1)
  const deleteList = (indexToDelete) => {
    // const newArray = [...글제목배열];
    // newArray.splice(indexToDelete, 1);
    const deleteArray = 글제목배열.filter((_, index) => index !== indexToDelete); //_ (언더스코어)를 사용하여 현재 요소를 무시하고 인덱스만 사용합니다. 왜냐하면 우리는 인덱스를 기반으로 특정 인덱스의 요소를 제거하려고 하기 때문입니다.
    글제목배열변경(deleteArray);
  };

  //*2)
  const insertList = () => {
    const textToInsert = document.querySelector('#inputText').value;
    const newArray = [...글제목배열];
    newArray.unshift(textToInsert);
    글제목배열변경(newArray);
  };

  function orderTitle() {
    const newArray = [...글제목배열];
    글제목배열변경(newArray.sort());
  }

  function 제목변경(text, i) {
    //글제목배열변경[i] = '여자';
    const newArray = [...글제목배열]; // 기존 배열 복사
    newArray[i] = text; //'읽은 포스팅'; // 원하는 변경 값 할당
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
      <div>
        <button onClick={() => orderTitle()}>제목순</button>
      </div>
      {글제목배열.map((text, i) => (
        <div className="list">
          <h4
            onClick={() => {
              setIndex(i);
              setModalState(!modalState);
            }}
          >
            <span onClick={() => 제목변경(text, i)}>{text} </span>
            <span
              onClick={(e) => {
                e.stopPropagation();
                const newArray = [...따봉];
                newArray[i] = 따봉[i] + 1;
                따봉변경(newArray);
              }}
            >
              🖤👍
            </span>
            {따봉[i]}
          </h4>
          <p>2월 17일 발행</p>
          <button onClick={() => deleteList(i)}>글삭제</button>
        </div>
      ))}

      <input
        id="inputText"
        onChange={(e) => {
          입력값변경(e.target.value);
          console.log(입력값);
        }}
      ></input>
      <button onClick={insertList}>글발행</button>
      {modalState === true ? <Modal 글제목배열={글제목배열} 제목변경={제목변경} index={index} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h4>{props.글제목배열[props.index]}</h4> <span></span>
        <p>날짜</p> <span></span>
        <p>상세내용</p>
        <button
          onClick={() => {
            props.제목변경('수정', props.index);
            //props.제목변경(props.글제목배열[props.index] + '- 변경됨', props.index); ?? 왜추가 계속 되는거지?
          }}
        >
          글수정
        </button>
      </div>
    </>
  );
}

const Modal2 = () => {};

export default App;
/**
 * 
 * 1) 배열을 사용하여 특정 인덱스의 요소를 삭제하는 법
 * - splice() 메서드 사용:
 * splice() 메서드를 사용하면 배열에서 특정 인덱스의 요소를 삭제할 수 있습니다. 이 메서드는 원본 배열을 변경하므로 주의해야 합니다.
 * 배열에서 요소를 제거하거나 추가할 때 사용합니다.
 * - delete 연산자 사용:
 * delete 연산자를 사용하여 특정 인덱스의 요소를 삭제할 수 있습니다. 그러나 이 방법은 삭제된 요소를 undefined로 설정하므로 배열의 길이는 그대로 유지됩니다.
 * - filter() 메서드 사용:
 * filter() 메서드를 사용하여 삭제할 인덱스를 제외한 새로운 배열을 생성할 수 있습니다.
 * - 배열 슬라이스 사용:
 * 배열 슬라이스를 사용하여 삭제할 인덱스 이전과 이후의 요소를 합쳐 새로운 배열을 생성할 수 있습니다.
 * 
 * 2) 배열에 요소를 추가하는 법
 *  - push(): 배열의 끝에 하나 이상의 요소를 추가합니다.
    - unshift(): 배열의 시작에 하나 이상의 요소를 추가합니다.
    - splice(): 배열의 특정 인덱스에 요소를 추가하거나 제거할 수 있습니다.
    (첫 번째 인수는 요소를 추가하려는 인덱스, 두 번째 인수는 제거할 요소의 개수 (0으로 설정하면 요소를 제거하지 않음), 그리고 세 번째 인수부터는 추가하려는 요소)
 */
