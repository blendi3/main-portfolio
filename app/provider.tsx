"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  // Prevent hydration errors by waiting until the client-side JS is loaded
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true); // Set to true once the component is mounted
  }, []);

  if (!mounted) return <>{children}</>; // Render children without theme initially

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
