import React, { MouseEvent, useCallback } from "react";
import "./App.css";
import Tabs from "./Components/Tab/Tabs";
import AppHeaderContextMenu from "./Components/Layout/AppHeaderContextMenu";
import { ContextMenuType } from "./Components/Layout/types";
import useContextMenuToggle from "./Hooks/useContextMenuToggle";
import { ContextMenuToggleContext } from "./Contexts/ContextMenuToggleContext";

export default function App() {
  const contextMenuToggle = useContextMenuToggle();

  const handleOutsideClick = useCallback(() => {
    contextMenuToggle.isOpen() && contextMenuToggle.close();
  }, [contextMenuToggle]);

  function handleRightClick(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <div
      className="App"
      onClick={handleOutsideClick}
      onContextMenu={handleRightClick}
    >
      <header
        className="App-header"
        onContextMenu={(e) => {
          contextMenuToggle.open(e, ContextMenuType.AppHeader);
        }}
      >
        <ContextMenuToggleContext.Provider value={contextMenuToggle}>
          <Tabs />
        </ContextMenuToggleContext.Provider>
      </header>

      <AppHeaderContextMenu
        {...contextMenuToggle.positions}
        isOpen={contextMenuToggle.isOpen(ContextMenuType.AppHeader)}
      />
    </div>
  );
}
