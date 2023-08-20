import { MouseEvent, useCallback, useState } from "react";
import { ContextMenuTogglProps, OpenContextMenuToggle } from "./types";
import { OutsideClickContextState } from "../Components/Layout/types";

export default function useContextMenuToggle(): ContextMenuTogglProps {
  const outsideClick: OutsideClickContextState = {
    show: false,
    name: "",
  };
  const [positions, setPositions] = useState({
    xPosition: 0,
    yPosition: 0,
  });
  const [showContextMenu, setShowContextMenu] =
    useState<OutsideClickContextState>(outsideClick);

  function close() {
    setShowContextMenu(outsideClick);
  }

  const open: OpenContextMenuToggle = useCallback(
    (e: MouseEvent<HTMLElement>, name: string) => {
      e.preventDefault();
      e.stopPropagation();

      setPositions({
        xPosition: e.clientX,
        yPosition: e.clientY,
      });

      setShowContextMenu({
        show: true,
        name,
      });
    },
    [setShowContextMenu]
  );

  function isOpen(name?: string): boolean {
    return showContextMenu.show && (!name || name === showContextMenu.name);
  }

  return {
    close,
    isOpen,
    name: showContextMenu.name,
    open,
    positions,
  };
}
