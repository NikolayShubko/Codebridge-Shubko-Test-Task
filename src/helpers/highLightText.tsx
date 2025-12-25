import type React from "react";
import Mark from "../components/Mark/Mark";

export function highLightText(text: string, query: string): React.ReactNode {
  const words = query
    ?.trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
  const pattern = words
    ?.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  const regex = new RegExp(`(${pattern})`, "gi");
  const parts = text.split(regex);
  return parts.map((part) => (regex.test(part) ? <Mark>{part}</Mark> : part));
}
