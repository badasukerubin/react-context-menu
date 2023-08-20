import React, {
  Fragment,
  MouseEvent,
  memo,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { GenericMenuProps } from "./types";
import { ContextMenuToggleContext } from "../../Contexts/ContextMenuToggleContext";

export default memo(function GenericContextMenu({
  menus,
  xPosition,
  yPosition,
  isOpen,
}: GenericMenuProps) {
  const [position, setPosition] = useState({
    top: yPosition,
    left: xPosition,
  });
  const shownMenus = menus.filter((menu) => menu.show === true);
  const ref = useRef<HTMLDivElement>(null);
  const contextMenuToggle = useContext(ContextMenuToggleContext);

  useLayoutEffect(() => {
    function adjustPosition() {
      const { innerWidth, innerHeight } = window;
      const { width, height } = ref.current?.getBoundingClientRect() || {
        width: 0,
        height: 0,
      };

      const newPosition = {
        top: yPosition + height > innerHeight ? yPosition - height : yPosition,
        left: xPosition + width > innerWidth ? xPosition - width : xPosition,
      };

      setPosition(newPosition);
    }

    adjustPosition();
  }, [xPosition, yPosition]);

  return (
    <>
      {isOpen && (
        <div
          ref={ref}
          className="Generic-context-menu"
          style={{ top: `${position.top}px`, left: `${position.left}px` }}
        >
          {shownMenus.map((menu, index) => (
            <Fragment key={index}>
              <button
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  menu.onClick();
                  contextMenuToggle.isOpen() && contextMenuToggle.close();
                }}
                className="Generic-context-button"
              >
                <span>{menu.label}</span>
              </button>

              {index !== shownMenus.length - 1 && (
                <hr className="Generic-context-hr" />
              )}
            </Fragment>
          ))}
        </div>
      )}
    </>
  );
});
