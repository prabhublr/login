import React from 'react';
import styled from '@emotion/styled';
import { Box } from '../system';

interface ITableHeader {
  label: string;
}
const Root = styled.div`
  .table-wrap {
    overflow: auto;
    width: 100%;
    padding-bottom: 10px;
    max-height: 490px;
  }
  .table-wrap::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #e3e9ef;
  }
  .table-wrap::-webkit-scrollbar {
    height: 6;
    background-color: #e3e9ef;
    border-radius: 10px;
    width: 6px;
  }
  .table-wrap::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #606060;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    max-width: 300px;
    thead {
      tr {
        position: relative;
        background-color: #f8f8f8;
        z-index: 999;
        th {
          text-transform: capitalize;
          padding: 22px 12px;
          width: 100%;
          word-wrap: break-word;
          white-space: normal;
          text-align: center;
          color: #606060;
          font-weight: bold;
          font-size: 18px;
          border: 2px solid #fff;
          background-color: #f8f8f8;
          position: sticky;
          top: 0;
          &:first-of-type {
            text-align: left;
          }
        }
      }
    }
    tbody {
      border: 2px solid #eee;
      tr {
        background-color: #504943;
        td {
          padding: 20px 12px;
          word-wrap: break-word;
          white-space: normal;
          text-align: center;
          font-weight: 500;
          font-size: 16px;
          color: #7f7f80;
          &:first-of-type {
            text-align: left;
          }
        }
      }
      tr:nth-child(even) {
        background-color: #f8f8f8;
      }
    }
  }
`;

export default function TabComp(props: { values: any[]; headers: ITableHeader[] }) {
  const { values, headers } = props;
  return (
    <Root>
      <Box className="table-wrap" px="10px">
        {values && values.length > 0 && (
          <table>
            <thead>
              <tr>
                {headers &&
                  headers.map((header: any, hIndex: number) => {
                    return <th key={`${header}-${hIndex}`}>{header.label}</th>;
                  })}
              </tr>
            </thead>
            <tbody>
              {headers &&
                values &&
                values.map((value: any, valIndex: number) => {
                  return (
                    <tr key={valIndex}>
                      {headers.map((header) => (
                        <td key={`${header.label}-${valIndex}`}>{value[header.label]}</td>
                      ))}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </Box>
    </Root>
  );
}
