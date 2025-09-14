import { useIncrementEndScenePasses } from "./use-increment-end-scene-passes"
import { useIncrementStoryPasses } from "./use-increment-story-passes"
import { useSetStoryResult } from "./use-set-story-result"

export function useEndScene(storyId: string) {
   const incrementStoryPassesMutation = useIncrementStoryPasses(storyId)
   const incrementEndScenePassesMutation = useIncrementEndScenePasses(storyId)
   const setStoryResultMutation = useSetStoryResult(storyId)

   const isDisabledEndLink =
      incrementStoryPassesMutation.isPending ||
      incrementEndScenePassesMutation.isPending ||
      setStoryResultMutation.isPending

   const handleEndScene = (sceneId: string, isAuth: boolean) => {
      incrementStoryPassesMutation.mutate()
      incrementEndScenePassesMutation.mutate(sceneId)

      if (isAuth) setStoryResultMutation.mutate(sceneId)
   }

   return {
      isDisabledEndLink,
      incrementStoryPassesMutation,
      incrementEndScenePassesMutation,
      setStoryResultMutation,
      handleEndScene
   }
}
