import {
   EditDefaultSceneNode,
   EditEndSceneNode,
   EditStartSceneNode,
} from "@/src/features/scene/nodes"
import { NodeTypes } from "@xyflow/react"

export const nodeTypes: NodeTypes = {
   start: EditStartSceneNode,
   end: EditEndSceneNode,
   base: EditDefaultSceneNode,
}
