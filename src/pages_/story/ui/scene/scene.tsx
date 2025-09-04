"use client"

import { type Scene as SceneType } from "@/src/entities/scene"
import { Scene } from "@/src/widgets/scene"
import { useIncrementStoryPasses } from "../../model/use-increment-story-passes"
import { useIncrementEndScenePasses } from "../../model/use-increment-end-scene-passes"
import { useSetStoryResult } from "../../model/use-set-story-result"

type Props = {
   storyId: string
   isAuth: boolean
   data: SceneType[]
}

export function PageScene({ storyId, data, isAuth }: Props) {
   const incrementStoryPassesMutation = useIncrementStoryPasses(storyId)
   const incrementEndScenePassesMutation = useIncrementEndScenePasses(storyId)
   const setStoryResultMutation = useSetStoryResult(storyId)

   const isDisabledEndLink =
      incrementStoryPassesMutation.isPending ||
      incrementEndScenePassesMutation.isPending ||
      setStoryResultMutation.isPending

   const onSceneChange = (scene: SceneType | null) => {
      if (!scene) return
      if (scene.type === "end") {
         incrementStoryPassesMutation.mutate()
         incrementEndScenePassesMutation.mutate(scene.id)

         if (isAuth) setStoryResultMutation.mutate(scene.id)
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
