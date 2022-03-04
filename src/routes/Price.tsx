import { darken } from "polished";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinTodayHistory } from "../api";
interface ChartProps {
  coinId: string;
}

const PriceTable = styled.table`
  width: 100%;
  th,
  td {
    border: 1px solid ${(props) => darken(0.3, props.theme.bgColor)};
    padding: 12px 8px;
    font-size: 14px;
  }
  th {
    font-weight: bold;
    background-color: ${(props) => darken(0.1, props.theme.bgColor)};
  }
`;

function Price({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery(["price", coinId], () =>
    fetchCoinTodayHistory(coinId)
  );
  return (
    <>
      {isLoading ? (
        "Loading price..."
      ) : (
        <PriceTable>
          <tbody>
            <tr>
              <th>Open</th>
              <td>{data[0].open}</td>
            </tr>
            <tr>
              <th>High</th>
              <td>{data[0].high}</td>
            </tr>
            <tr>
              <th>Low</th>
              <td>{data[0].low}</td>
            </tr>
            <tr>
              <th>Close</th>
              <td>{data[0].close}</td>
            </tr>
            <tr>
              <th>time_open</th>
              <td>{data[0].time_open}</td>
            </tr>
            <tr>
              <th>time_close</th>
              <td>{data[0].time_close}</td>
            </tr>
          </tbody>
        </PriceTable>
      )}
    </>
  );
}

export default Price;
