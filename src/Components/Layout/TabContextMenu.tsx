import React, { memo } from "react";
import { ContextMenuProps, GenericMenu } from "./types";

import GenericContextMenu from "./GenericContextMenu";

export default memo(function TabContextMenu({
  isOpen,
  xPosition,
  yPosition,
}: ContextMenuProps) {
  const menus: GenericMenu[] = [
    {
      label: "Console",
      show: true,
      onClick: () => {
        console.log("Console");
      },
    },
    {
      label: "Reload",
      show: true,
      onClick: () => {
        window.location.reload();
      },
    },
  ];

  return (
    <>
      <GenericContextMenu
        menus={menus}
        xPosition={xPosition}
        yPosition={yPosition}
        isOpen={isOpen}
      />
    </>
  );
});
