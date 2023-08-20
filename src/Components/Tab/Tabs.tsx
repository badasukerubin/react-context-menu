import React, { useContext } from "react";
import { ContextMenuToggleContext } from "../../Contexts/ContextMenuToggleContext";
import { ContextMenuType } from "../Layout/types";
import TabContextMenu from "../Layout/TabContextMenu";

export default function Tabs() {
  const tabContextMenu = useContext(ContextMenuToggleContext);

  return (
    <>
      <ul onContextMenu={(e) => tabContextMenu.open(e, ContextMenuType.Tab)}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#home">Products</a>
        </li>
        <li>
          <a href="#home">Services</a>
        </li>
        <li>
          <a href="#home">About</a>
        </li>
        <li>
          <a href="#home">Contact</a>
        </li>
      </ul>

      <TabContextMenu
        {...tabContextMenu.positions}
        isOpen={tabContextMenu.isOpen(ContextMenuType.Tab)}
      />
    </>
  );
}
