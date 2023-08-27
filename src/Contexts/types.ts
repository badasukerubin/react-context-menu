import { OpenContextMenuToggle } from "../Hooks/types";

export interface ContextMenuToggleProps {
  close: () => void;
  isOpen: (name?: string) => boolean;
  name: string;
  open: OpenContextMenuToggle;
  positions: {
    xPosition: number;
    yPosition: number;
  };
}
