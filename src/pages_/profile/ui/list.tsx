"use client"

import { Story } from "@/src/entities/story"
import { InfiniteStoriesList } from "@/src/features/story/list"
import { StoryListMainCard } from "@/src/widgets/story-list-main-card"
import { ListEndLabel } from "./list-end-label/list-end-label"

type Props = {
   userId: string
}

export function ProfilePageStoriesList({ userId }: Props) {
   return (
      <InfiniteStoriesList
         filters={{ limit: 9, sort: "new", page: 1, byUserId: userId }}
         label={<ListEndLabel />}
         renderItem={(data: Story) => <StoryListMainCard key={data.id} data={data} />}
      />
   )
}
