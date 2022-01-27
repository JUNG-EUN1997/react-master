import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 1px solid ${(props) => props.borderColor};
`;

// 요소의 데이터타입을 선언해줌
interface CircleProps {
  bgColor: string;
  borderColor?: string; // '?' 를 붙이면 optional값 혹은 -> borderColor: string | undefined;
  text?:string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) { //optional 값인 것의 기본값 설정 시 text = "default text" 형식
  const [counter, setCounter] = useState(0); //default 값을 통해, number값 형식이라는 것을 암 (ts에서)
  const [value, setValue] = useState<number|string>(0); // ts에서 number값 또는 string 값을갖을 수 있다는 설정
  setCounter(1)
  setValue(1)
  setValue("hello");
  // setValue(true); // 이건 오류남(num이나 str 형식이 아니어서)
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  ); 
    // borderColor가 undefined라면 ?? 뒤에 값을 가진다. 문자("#aaa") 혹은 선언된 값을 갖고올 수 있음
}

export default Circle;
