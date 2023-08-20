import { MouseEvent } from "react";

export interface OpenContextMenuToggle {
  (e: MouseEvent<HTMLElement>, name: string): void;
}

export interface ContextMenuTogglProps {
  close: () => void;
  isOpen: (name?: string) => boolean;
  name: string;
  open: OpenContextMenuToggle;
  positions: {
    xPosition: number;
    yPosition: number;
  };
}
