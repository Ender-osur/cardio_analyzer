export const COLORS = {
  primary: "#008092",
  secondary: "#18526f",
  background: "#004052",
  activeText: "#FFFFFF",
  inactiveText: "#008092",
  white: "#FFFFFF",
  gray: "#666666",
  lightGray: "#E0E0E0",
  error: "#FF0000",
  success: "#4CAF50",
} as const;

export const FONTS = {
  regular: {
    fontSize: 16,
    fontFamily: "System",
  },
  medium: {
    fontSize: 18,
    fontWeight: "600" as const,
    fontFamily: "System",
  },
  large: {
    fontSize: 24,
    fontWeight: "bold" as const,
    fontFamily: "System",
  },
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const; 