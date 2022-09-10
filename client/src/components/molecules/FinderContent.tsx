import styled from 'styled-components';

export interface IFinderContent {
  name: string;
  category: string;
  time: string;
}

export interface IFinderContentProps {
  FinderContents: IFinderContent[];
}

const FinderContent = (props: IFinderContentProps) => {
  const { FinderContents } = props;

  return (
    <Wrapper>
      <Table>
        <colgroup>
          <col width={'60%'} />
          <col width={'20%'} />
          <col width={'20%'} />
        </colgroup>
        <TableThead>
          <tr>
            <th>이름</th>
            <th>종류</th>
            <th>최근 사용일</th>
          </tr>
        </TableThead>
        <tbody>
          {FinderContents.map(content => {
            return (
              <tr>
                <td>{content.name}</td>
                <td>{content.category}</td>
                <td>{content.time}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Wrapper>
  );
};
const TableThead = styled.thead`
  font-size: 12px;
  margin: 0;
  tr {
    th {
      background-color: rgba(0, 0, 0, 0.2);
      padding-left: 12px;
      position: sticky;
      top: 0;
    }
  }
`;
const Table = styled.table`
  width: 100%;
  text-align: left;
  border: none;
  margin: 0;

  tbody {
    tr:nth-child(2n + 1) {
      background-color: rgba(0, 0, 0, 0.2);
    }
    tr:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  height: 35vh;
  overflow: auto;
`;

export default FinderContent;