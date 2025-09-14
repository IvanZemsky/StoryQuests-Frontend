"use client"

import { Node, useReactFlow } from "@xyflow/react"
import { useState } from "react"
import { SceneNode, SceneNodeData } from "./types"
import { AnswerEdge } from "../../edges/model/types"

export function useSceneAnswerForm(
   nodeId: string,
   handleSaveClick: (data: { title: string; description: string; img: string }) => void,
) {
   const { getNodes } = useReactFlow<SceneNode, AnswerEdge>()

   const nodeData = getNodeData(getNodes(), nodeId)

   const [form, setForm] = useState({
      title: nodeData?.title ?? "",
      description: nodeData?.description ?? "",
      img: nodeData?.img ?? "",
   })

   const handleSave = () => {
      handleSaveClick(form)
   }

   return { form, setForm, handleSave }
}

function getNodeData(nodes: Node[], nodeId: string) {
   const node = nodes.find((e) => e.id === nodeId)
   if (!node || !node.data) return null
   return node.data as SceneNodeData
}
