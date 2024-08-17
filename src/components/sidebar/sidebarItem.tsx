import clsx from "clsx"
import { Link } from "react-router-dom"

import { getColorValue } from "@/utils"

type iconProp = {
  color: string
  className?: string
}

export function SideBarItem({
  text,
  icon: Icon,
  selected,
  path,
}: {
  text: string
  icon: ({ className, color }: iconProp) => JSX.Element
  selected: boolean
  path: string
}) {
  return (
    <li
      className={clsx(
        "group w-full h-16 hover:bg-sidebar-background-selected",
        selected && "bg-sidebar-background-selected"
      )}
    >
      <Link
        className={clsx("flex gap-7  items-center w-full h-full pl-10")}
        to={path}
      >
        <Icon
          className={clsx(
            "w-5 h-5 ",
            selected && text !== "Estacionamentos"
              ? "fill-black"
              : selected && text === "Estacionamentos" && "stroke-black",
            text === "Estacionamentos"
              ? "group-hover:stroke-black"
              : "group-hover:fill-black"
          )}
          color={getColorValue("gray-focus")}
        />
        <span
          className={clsx(
            "text-md group-hover:text-black transition-opacity duration-150",
            selected ? "text-black" : "text-sidebar-text opacity-100"
          )}
        >
          {text}
        </span>
      </Link>
    </li>
  )
}
