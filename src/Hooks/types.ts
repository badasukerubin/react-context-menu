import { MouseEvent } from "react";

export interface OpenContextMenuToggle {
  (e: MouseEvent<HTMLElement>, name: string): void;
}
