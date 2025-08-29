"use client"

import { Scene } from "@/src/entities/scene"
import { SceneNode, AnswerEdge } from "@/src/features/scene"
import { useState } from "react"

export function useCreateScenesFromFlowData(nodes: SceneNode[], edges: AnswerEdge[]) {
   const [scenes, setScenes] = useState<Scene[]>([])

   const handleCreateScenes = () => setScenes(createScenes(nodes, edges))

   return { scenes, handleCreateScenes }
}

const createScenes = (nodes: SceneNode[], edges: AnswerEdge[]): Scene[] => {
   return nodes.map((node) => ({
      id: node.id,
      title: node.data.title,
      description: node.data.description,
      img: node.data.img,
      type: node.data.type,
      number: node.data.number,
      storyId: "",
      answers: createAnswerForScene(edges, node.id),
   }))
}

function createAnswerForScene(edges: AnswerEdge[], sceneNodeId: string) {
   return edges
      .map((edge) => {
         if (edge.source === sceneNodeId) {
            return {
               id: edge.id,
               text: edge.data.text,
               nextSceneNumber: Number(edge.target),
            }
         }
      })
      .filter((answer) => !!answer)
}
