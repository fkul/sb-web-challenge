import styled from "styled-components"

export const TableWrapper = styled.div`
  overflow-x: auto;
  padding-bottom: 20px;

  & > table {
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;

    th,
    td {
      border: 1px solid ${({ theme }) => theme.colors.border};
      padding: 6px 10px;
    }

    th {
      background-color: ${({ theme }) => theme.colors.bgSecondary};
      text-transform: uppercase;
    }
  }
`
