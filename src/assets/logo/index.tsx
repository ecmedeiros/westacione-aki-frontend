import { getColorValue } from "@/utils"

export function LogoIcon() {
  return (
    <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
      <rect
        width="100%"
        height="100%"
        rx="50"
        ry="50"
        fill={getColorValue("sidebar-background")}
      />
      <text
        x="50%"
        y="60%"
        fontFamily="Arial"
        fontSize="70"
        fill="black"
        textAnchor="middle"
        fontWeight="bolder"
      >
        WEA
      </text>
    </svg>
  )
}
