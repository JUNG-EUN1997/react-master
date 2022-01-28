import 'styled-components';

//and extend them!
declare module 'styled-components' {
  export interface DefaultTheme { //추가로 선언하고 사용한 내용들의 형식을 선언
    //해당 영역에 DefalutTheme에서 사용하는 값들을 모두 선언하기 때문에, 해당 내용을 사용하는 것 들에서 일부 내용이 빠지면 알 수 있음
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
}
