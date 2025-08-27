import type { NodeProps } from "@xyflow/react"
import type { Node } from "@xyflow/react"

export type SceneNodeData = {
  title: string
  description: string
  img: string
  type: "default" | "end"
  number: number
}

export type SceneNode = Node<SceneNodeData>
export type SceneNodeProps = NodeProps<SceneNode>
