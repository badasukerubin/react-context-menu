import { Context, createContext } from "react";
import { ContextMenuToggleProps } from "./types";

export const ContextMenuToggleContext: Context<ContextMenuToggleProps> =
  createContext<ContextMenuToggleProps>({
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
