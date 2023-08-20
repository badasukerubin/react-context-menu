import React, { memo } from "react";
import { ContextMenuProps, GenericMenu } from "./types";

import GenericContextMenu from "./GenericContextMenu";

export default memo(function AppHeaderContextMenu({
  isOpen,
  xPosition,
  yPosition,
}: ContextMenuProps) {
  const menus: GenericMenu[] = [
    {
      label: "Reload",
      show: true,
      onClick: () => {
        window.location.reload();
      },
    },
    {
      label: "Inspect",
      show: true,
      onClick: () => {
        window.location.reload();
      },
    },
    {
      label: "Console",
      show: true,
      onClick: () => {
        console.log("Console");
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
