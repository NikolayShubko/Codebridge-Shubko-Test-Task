export function cutText(text: string): string {
  if (!text) return "";
  return text.length > 100 ? text.slice(0, 100) + "..." : text;
}
