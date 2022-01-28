import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

// 방법 2 - coinId가 무엇인지 interface 선언
interface RouteParams {
  coinId: string;
}

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.div`
  text-align: center;
`;

interface RouterState {
  name: string;
}

function Coin() {
  /* 방법 1 - coinId가 무엇인지 직접 선언
    const {coinId} = useParams<{coinId:string}>();
  */
  const { coinId } = useParams<RouteParams>();
  const [loading, setLoading] = useState<boolean>(true);
  const { state } = useLocation<RouterState>(); //이렇게 사용해서 보다 빠른 app 느낌이 남
  console.log(state);
  return (
    <Container>
      <Header>
        <Title>{state?.name || "loading..."}</Title> {/*이전 페이지에서 갖고오기 때문에 바로 접속한다면 에러가 나와서(ex 주소 다이렉트 접속) 해당 내용 작성 필요 */}
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

export default Coin;
