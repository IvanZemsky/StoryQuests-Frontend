export function getShareToTelegramLink(link: string, text?: string) {
   let href = `https://t.me/share/url?url=${encodeURIComponent(link)}`
   if (text) {
      href += `&text=${encodeURIComponent(text)}`
   }
   return href
}
