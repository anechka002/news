import { Pagination } from ".."

type Props = {
  top: boolean
  bottom: boolean
  children: React.ReactNode
}

export const PaginationWrapper = ({top, bottom, children}: Props) => {

  return (
    <>
    {top && <Pagination/>}
    {children}
    {bottom && <Pagination/>}
    </>
  )
}
