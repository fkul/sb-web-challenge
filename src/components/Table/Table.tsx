import { TableWrapper } from "./Table.styles"

interface TableProps {
  children: React.ReactNode
}

const Table = ({ children }: TableProps) => {
  return (
    <TableWrapper>
      <table>{children}</table>
    </TableWrapper>
  )
}

export default Table
