import { Context, createContext } from "react";
import { ContextMenuTogglProps } from "../Hooks/types";

export const ContextMenuToggleContext: Context<ContextMenuTogglProps> =
  createContext<ContextMenuTogglProps>({
    close: () => {
      return;
    },
    isOpen: () => {
      return false;
    },
    name: "",
    open: () => {
      return;
    },
    positions: {
      xPosition: 0,
      yPosition: 0,
    },
  });
