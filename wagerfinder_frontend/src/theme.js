//
// Ocean Professional theme and utility functions for the gamefinder app
//

// PUBLIC_INTERFACE
export const theme = {
  name: "Ocean Professional",
  colors: {
    primary: "#2563EB",
    secondary: "#F59E0B",
    success: "#22C55E",
    error: "#EF4444",
    background: "#f9fafb",
    surface: "#ffffff",
    text: "#111827",
    subtleText: "#6B7280",
    border: "#E5E7EB",
    gradientFrom: "rgba(59,130,246,0.10)",
    gradientTo: "#F9FAFB"
  },
  radii: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    full: "9999px"
  },
  shadows: {
    sm: "0 1px 2px rgba(0,0,0,0.06)",
    md: "0 4px 10px rgba(0,0,0,0.08)",
    lg: "0 10px 25px rgba(0,0,0,0.10)"
  },
  transitions: {
    base: "all 200ms ease",
    slow: "all 320ms ease"
  }
};

// PUBLIC_INTERFACE
export const injectCSSVariables = () => {
  const root = document.documentElement;
  root.style.setProperty("--gf-primary", theme.colors.primary);
  root.style.setProperty("--gf-secondary", theme.colors.secondary);
  root.style.setProperty("--gf-success", theme.colors.success);
  root.style.setProperty("--gf-error", theme.colors.error);
  root.style.setProperty("--gf-bg", theme.colors.background);
  root.style.setProperty("--gf-surface", theme.colors.surface);
  root.style.setProperty("--gf-text", theme.colors.text);
  root.style.setProperty("--gf-subtle-text", theme.colors.subtleText);
  root.style.setProperty("--gf-border", theme.colors.border);
  root.style.setProperty("--gf-gradient-from", theme.colors.gradientFrom);
  root.style.setProperty("--gf-gradient-to", theme.colors.gradientTo);

  root.style.setProperty("--gf-radius-sm", theme.radii.sm);
  root.style.setProperty("--gf-radius-md", theme.radii.md);
  root.style.setProperty("--gf-radius-lg", theme.radii.lg);
  root.style.setProperty("--gf-radius-full", theme.radii.full);

  root.style.setProperty("--gf-shadow-sm", theme.shadows.sm);
  root.style.setProperty("--gf-shadow-md", theme.shadows.md);
  root.style.setProperty("--gf-shadow-lg", theme.shadows.lg);

  root.style.setProperty("--gf-transition", theme.transitions.base);
  root.style.setProperty("--gf-transition-slow", theme.transitions.slow);
};

// PUBLIC_INTERFACE
export const categories = [
  { id: "all", label: "All" },
  { id: "table", label: "8 Ball" },
  { id: "poker", label: "Poker" },
  { id: "blackjack", label: "Blackjack" },
  { id: "bowling", label: "Bowling" },
  { id: "basketball", label: "Basketball" },
  { id: "sprinting", label: "Sprinting" },
  { id: "videogames", label: "Video Games" },
];

// PUBLIC_INTERFACE
export const videogames = [
  "Call of Duty",
  "Clash Royale",
  "Fortnite",
  "Rocket League",
  "NBA 2K",
];
