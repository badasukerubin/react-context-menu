export enum ContextMenuType {
  AppHeader = "app-header",
  Tab = "tab",
}

export interface ContextMenuProps {
  xPosition: number;
  yPosition: number;
  isOpen: boolean;
}

export interface GenericMenu {
  label: string;
  show: boolean;
  onClick: () => void;
}

export interface GenericMenuProps {
  menus: GenericMenu[];
  xPosition: number;
  yPosition: number;
  isOpen: boolean;
}

export interface OutsideClickContextState {
  show: boolean;
  name: string;
}
