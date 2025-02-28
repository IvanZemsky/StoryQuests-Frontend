"use server"

import { ReactNode } from "react"
import styles from './styles.module.scss'
import { StoryHeader } from "@/entities/Story"
import { fetchStory } from "@/pages_/Story"

type Props = {
   children: ReactNode,
   params: Promise<{
      id: string
   }>
}

export const StoryLayout = async ({ children, params }: Props) => {
   const {id} = await params
   const story = await fetchStory(id)

   return (
      <div className={styles.app}>
         <StoryHeader storyName={story?.name}/>
         <main>
            {children}
         </main>
      </div>
   )
}