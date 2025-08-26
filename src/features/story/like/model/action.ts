"use server"

import { revalidatePath } from "next/cache"

export async function revalidateStories(storyId: string) {
   revalidatePath("/stories")
   revalidatePath(`/stories/${storyId}`)
}
