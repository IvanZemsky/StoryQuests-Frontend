import { Wrapper } from "@/src/shared/ui";

type Props = {
   filters: React.ReactNode
   list: React.ReactNode
}

export function StoriesPageLayout({ filters, list }: Props) {
   return ( 
      <Wrapper>
         <header>{filters}</header>
         {list}
      </Wrapper>
    );
}
