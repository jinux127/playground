import React, { useState } from 'react';
import styled from 'styled-components';
import { icon_velog } from '../../assets/images';
import useOutSideClick from '../../hooks/useOutSideClick';
import { IFinder } from '../../types/interface';

export interface IFinderContentProps {
  FinderContents: IFinder[];
  setMacAlert?: React.Dispatch<
    React.SetStateAction<{
      title: string;
      url: string;
      icon: string;
      isView: boolean;
    }>
  >;
}

const FinderContent = (props: IFinderContentProps) => {
  const { FinderContents, setMacAlert } = props;
  const [clickedIndex, setClickedIndex] = useState(-1);
  const { focusRef } = useOutSideClick<HTMLTableSectionElement>({
    outSideCallback: () => setClickedIndex(-1),
  });

  const handleAppClick = (
    e: React.MouseEvent,
    props: { icon: string; title: string; url: string }
  ) => {
    if (!setMacAlert) return;

    setMacAlert({ ...props, isView: true });
  };

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
        <tbody ref={focusRef}>
          {FinderContents.map((content, i) => {
            return (
              // 임시 블로그로 이동하기
              // todo : 새창으로 열기 경고창 혹은 iframe 같은 걸로 안에 창 띄우기
              <tr
                key={i}
                onDoubleClick={e =>
                  handleAppClick(e, { icon: icon_velog, title: content.title, url: content.href })
                }
                onClick={e => setClickedIndex(i)}
                style={clickedIndex === i ? { background: 'rgba(255, 255, 255, 0.2)' } : {}}
              >
                <td>{content.title}</td>
                <td>{content.desc}</td>
                <td>{content.date}</td>
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
      background-color: rgb(18, 18, 18);
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
      background-color: rgba(255, 255, 255, 0.1);
    }
    td {
      padding: 0.2rem;
    }
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  height: 94%;
  overflow: auto;
`;

export default FinderContent;
