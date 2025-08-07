import { BaseStartSceneNode, BaseEndSceneNode, BaseSceneNode } from "@/src/features/scene";
import { SceneNode } from "@/src/features/scene/nodes/model/types";
import { NodeTypes } from "@xyflow/react";

export const nodeTypes: NodeTypes = {
   start: BaseStartSceneNode,
   end: BaseEndSceneNode,
   default: BaseSceneNode,
}

export const initialNodes: SceneNode[] = [
   {
      id: "first-node",
      type: "start",
      position: { x: 0, y: 0 },
      data: {number: "node_1", title: "", description: "", img: "", type: "default" },
   },
]