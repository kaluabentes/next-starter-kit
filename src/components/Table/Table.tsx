import { range } from "lodash"
import { ReactNode } from "react"

import styles from "./Table.module.scss"
import Paper from "../Paper"
import Skeleton from "../Skeleton"

interface CommonProps {
  children: ReactNode
  isLoading?: boolean
  padding?: boolean
}

const TableSkeleton = () => (
  <Table>
    <thead>
      <tr>
        <th>
          <Skeleton />
        </th>
        <th>
          <Skeleton />
        </th>
        <th>
          <Skeleton />
        </th>
      </tr>
    </thead>
    <tbody>
      {range(10).map((number) => (
        <tr key={number}>
          <td>
            <Skeleton />
          </td>
          <td>
            <Skeleton />
          </td>
          <td>
            <Skeleton />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export const Table = ({
  children,
  isLoading = false,
  padding = false,
}: CommonProps) => {
  if (isLoading) {
    return <TableSkeleton />
  }

  return (
    <Paper className={styles.wrapper} padding={padding}>
      <table className={styles.table}>{children}</table>
    </Paper>
  )
}
