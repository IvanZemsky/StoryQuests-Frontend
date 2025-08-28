import { Edge, useReactFlow } from "@xyflow/react"
import { useState, FormEventHandler } from "react"
import { SceneNode } from "../../nodes/model/types"
import { AnswerEdge, AnswerEdgeData } from "./types"

export function useEditAnswerForm(
   edgeId: string,
   handleSaveClick: (text: string) => void,
) {
   const { getEdges } = useReactFlow<SceneNode, AnswerEdge>()

   const edgeData = getEdgeData(getEdges(), edgeId)

   const [input, setInput] = useState(edgeData?.text ?? "")

   const handleSave = () => {
      handleSaveClick(input)
   }

   const handleInputChange: FormEventHandler<HTMLInputElement> = (event) => {
      setInput(event.currentTarget.value)
   }

   return { input, setInput, handleSave, handleInputChange }
}

function getEdgeData(edges: Edge[], edgeId: string) {
   const edge = edges.find((e) => e.id === edgeId)
   if (!edge || !edge.data) return null
   return edge.data as AnswerEdgeData
}
