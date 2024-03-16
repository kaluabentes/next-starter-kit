import { toast, TypeOptions } from "react-toastify"
import "@fontsource-variable/inter"

export default function showToast(
  message: string,
  type: TypeOptions = "default"
) {
  return toast(message, {
    position: "top-right",
    theme: "light",
    type,
    style: {
      fontFamily: "'Inter Variable', sans-serif",
      fontSize: "0.875rem",
      lineHeight: "1.5",
    },
  })
}
