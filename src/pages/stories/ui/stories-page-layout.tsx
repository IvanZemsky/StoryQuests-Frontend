import { Wrapper } from "@/src/shared/ui"

type Props = {
   filters: React.ReactNode
   list: React.ReactNode
   pagination: React.ReactNode
}

export function StoriesPageLayout({ filters, list, pagination }: Props) {
   return (
      <Wrapper>
         <header>{filters}</header>
         {list}
         {pagination}
      </Wrapper>
   )
}
