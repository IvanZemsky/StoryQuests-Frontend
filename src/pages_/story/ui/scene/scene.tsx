"use client"

import { type Scene as SceneType } from "@/src/entities/scene"
import { Scene } from "@/src/widgets/scene"
import { useIncrementStoryPasses } from "../../model/use-increment-story-passes"
import { useIncrementEndScenePasses } from "../../model/use-increment-end-scene-passes"

type Props = {
   storyId: string
   data: SceneType[]
}

export function PageScene({ storyId, data }: Props) {
   const incrementStoryPassesMutation = useIncrementStoryPasses(storyId)
   const incrementEndScenePassesMutation = useIncrementEndScenePasses(storyId)

   const isDisabledEndLink = incrementStoryPassesMutation.isPending

   const onSceneChange = (scene: SceneType | null) => {
      if (!scene) return
      if (scene.type === "end") {
         incrementStoryPassesMutation.mutate()
         incrementEndScenePassesMutation.mutate(scene.id)
      }
   }

   return (
      <Scene
         data={data}
         firstSceneNumber={1}
         onSceneChange={onSceneChange}
         disableEndLink={isDisabledEndLink}
      />
   )
}
