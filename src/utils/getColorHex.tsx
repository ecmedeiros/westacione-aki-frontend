import resolveConfig from "tailwindcss/resolveConfig"

import tailwindConfig from "../../tailwind.config"

interface TailwindColors {
  [key: string]: string | TailwindColors
}

interface TailwindConfig {
  theme: {
    colors: TailwindColors
  }
}

function getColorValue(colorName: string): string {
  const fullConfig = resolveConfig(tailwindConfig) as TailwindConfig
  const colorValue = fullConfig.theme.colors[colorName]
  return typeof colorValue === "string" ? colorValue : "#000"
}

export { getColorValue }
