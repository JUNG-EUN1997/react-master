import React, { useState } from "react";

function App() {
  const [value, setValue] = useState(""); //ts로 인해 userState를 보호할 수 있음!
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    //ts에서 onchange 함수가 input el에 의해서 실행될 것을 확인
    const {
      currentTarget: { value }, //currentTarget 이 일반 react의 target과 동일. tsx에서는 해당방식으로 사용
    } = event;
    setValue(value);
  };
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello!",value)
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="username"
        />
        <button type="submit">Log in</button>
      </form>
    </>
  );
}

export default App;
