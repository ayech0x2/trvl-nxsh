import * as React from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
  }, []);
  return isMobile;
}
