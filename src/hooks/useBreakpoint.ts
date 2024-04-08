import { useBreakpoint as useBreakpointBase } from "use-breakpoint"

import breakpoints from "@/config/breakpoints"

export default function useBreakpoint() {
  const { breakpoint } = useBreakpointBase(breakpoints)

  return breakpoint
}
