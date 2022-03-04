import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { isDarkAtom } from "../atoms";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const CoinsList = styled.ul``;
const Coin = styled.li`
  background-color: white;
  color: #353b48;
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const TopNav = styled.div`
  text-align: right;
  width: 100%;
  button {
    background: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.bgColor};
    border: 0;
    border-radius: 4px;
    padding: 4px 6px;
    cursor: pointer;
  }
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  // 방법 2 : react-query 사용
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
  /*
  - [fetchCoins]에서 호출한 fecther함수의 상태를 [isLoading]이 저장하며, 호출 한 다음의 정보를 [data]에 저장 
  - react-query가 data를 캐시로 저장하여, 이제는 다른 페이지 접속 후 다시 돌아와도 재로딩 X
  */

  /* 방법 1 : react-query 사용X
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []); */

  const setDarkAtom = useSetRecoilState(isDarkAtom); //recoil의 atom값을 수정하는 fn
  const isDark = useRecoilValue(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  console.log(isDark);

  return (
    <Container>
      <Header>
        <TopNav>
          <button onClick={toggleDarkAtom}>{isDark ? "White Mode" : "Dark Mode"}</button>
        </TopNav>
        <Title>Coins</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <Img
                  src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLocaleLowerCase()}`}
                  width="30"
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;
