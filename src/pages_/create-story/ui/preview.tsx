import type { Scene as SceneType } from "@/src/entities/scene"
import { StoryPreviewModal } from "@/src/features/story/preview-modal"
import { Scene } from "@/src/widgets/scene"

type Props = {
   open?: boolean
   scenes: SceneType[]
   close: () => void
}

export function StoryPreview({ open, scenes, close }: Props) {
   if (!open) return null

   return (
      <StoryPreviewModal
         scene={
            scenes?.length && <Scene data={scenes} firstSceneNumber={1} disableEndLink />
         }
         handleCloseModal={close}
      />
   )
}
