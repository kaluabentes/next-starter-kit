import { useBreakpoint as useBreakpointBase } from "use-breakpoint";

import breakpoints from "@/ui/config/breakpoints";

export default function useBreakpoint() {
  const { breakpoint } = useBreakpointBase(breakpoints);

  return breakpoint;
}
