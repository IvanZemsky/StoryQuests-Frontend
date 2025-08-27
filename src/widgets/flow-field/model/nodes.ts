import { BaseStartSceneNode, BaseEndSceneNode, BaseSceneNode } from "@/src/features/scene"
import { NodeTypes } from "@xyflow/react"

export const nodeTypes: NodeTypes = {
   start: BaseStartSceneNode,
   end: BaseEndSceneNode,
   base: BaseSceneNode,
}
