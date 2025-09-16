"use client"

import { CreateSceneDTO, Scene } from "@/src/entities/scene"
import { CreateStoryInfoDTO, CreateStoryDTO, storyService } from "@/src/entities/story"
import { createScenes, validateSceneFlowData } from "@/src/features/scene/create-scenes"
import type { CreateStoryFormValues } from "@/src/features/story"
import type { SceneNode } from "@/src/features/scene/nodes"
import type { AnswerEdge } from "@/src/features/scene/edges"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

export function useCreateStory({
   nodes,
   edges,
   onInvalidScenes,
}: {
   nodes: SceneNode[]
   edges: AnswerEdge[]
   onInvalidScenes: () => void
}) {
   const router = useRouter()

   const { mutate, isPending } = useMutation({
      mutationFn: (DTO: CreateStoryDTO) => storyService.create(DTO),
      onSuccess(data) {
         router.push(`/stories/${data.storyId}`)
      },
   })

   const createStory = (data: CreateStoryFormValues) => {
      const storyInfo = createStoryInfoDTO(data, nodes.length)

      if (!validateSceneFlowData(nodes, edges)) {
         onInvalidScenes()
         return
      }

      const scenes = createScenes(nodes, edges)
      const scenesDTO = createScenesDTO(scenes)

      const DTO: CreateStoryDTO = {
         storyInfo,
         scenes: scenesDTO,
      }

      mutate(DTO)
   }

   return { createStory, isPending }
}

function createStoryInfoDTO(
   data: CreateStoryFormValues,
   sceneCount: number,
): CreateStoryInfoDTO {
   return {
      name: data.name,
      description: data.desc,
      img: data.img,
      tags: data.tags,
      sceneCount,
   }
}

function createScenesDTO(scenes: Scene[]): CreateSceneDTO[] {
   return scenes.map((scene) => ({
      title: scene.title,
      description: scene.description,
      img: scene.img,
      type: scene.type,
      number: scene.number,
      answers: scene.answers,
   }))
}
