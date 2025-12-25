export function cutText(text: string, maximum: number = 100): string {
  if (!text) return "";
  return text.length > maximum ? text.slice(0, maximum) + "..." : text;
}
