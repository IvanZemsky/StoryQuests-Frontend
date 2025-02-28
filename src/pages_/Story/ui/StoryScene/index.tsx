"use client"

import { useEffect } from "react"
import { BaseScene, Scene, useCurrentScene } from "@/entities/Scene"
import { STORY_FIRST_SCENE } from "@/entities/Story"
import { UserId } from "@/entities/User"
import { SelectAnswer } from "@/features/scene"
import { useIncrementStoryPasses } from "../../lib/hooks/useIncrementStoryPasses"
import { useSetStoryResult } from "../../lib/hooks/useSetStoryResult"
import { saveStoryResultToLS } from "../../lib/helpers/saveStoryResultToLS"
import { useIncrementScenePasses } from "../../lib/hooks/useIncrementScenePasses"

type Props = {
   scenes: Scene[]
   userId: UserId | null
}

export const StoryScene = ({ scenes, userId }: Props) => {
   const { sceneData, sceneNumber, setSceneNumber } = useCurrentScene(
      scenes,
      STORY_FIRST_SCENE,
   )
   const increaseStoryPassesMutation = useIncrementStoryPasses(sceneData)
   const incrementScenePassesMutation = useIncrementScenePasses(sceneData)
   const resultMutation = useSetStoryResult({
      sceneData,
      userId,
      disabled: !userId,
   })

   const shouldSaveToLS =
      (resultMutation.error || !userId) && sceneData?.type === "end"

   useEffect(() => {
      if (shouldSaveToLS) {
         saveStoryResultToLS(sceneData)
      }
   }, [shouldSaveToLS, sceneData])

   const isPending =
      increaseStoryPassesMutation.isPending ||
      resultMutation.isPending ||
      incrementScenePassesMutation.isPending

   if (!sceneData) {
      return <p>Error</p>
   }

   return (
      <BaseScene
         currentSceneNumber={sceneNumber}
         data={sceneData}
         selectAnswer={
            <SelectAnswer answers={sceneData.answers} setScene={setSceneNumber} />
         }
         disabledLink={isPending}
      />
   )
}
