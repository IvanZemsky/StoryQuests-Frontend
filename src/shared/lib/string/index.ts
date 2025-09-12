export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function copyToClipboard(
   text: string,
   onSuccess?: () => void,
   onError?: (error: unknown) => void,
) {
   try {
      navigator.clipboard.writeText(text)
      onSuccess?.()
   } catch (error) {
      onError?.(error)
   }
}