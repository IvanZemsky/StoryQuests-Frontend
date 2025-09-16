import type { SceneNode } from "@/src/features/scene/nodes";

export const initialNodes: SceneNode[] = [
   {
      id: "1",
      type: "start",
      position: { x: 0, y: 0 },
      data: {number: 1, title: "", description: "", img: "", type: "default" },
   },
]