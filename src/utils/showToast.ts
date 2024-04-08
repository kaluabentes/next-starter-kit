import { toast, TypeOptions } from "react-toastify"
import "@fontsource/geist-sans"

export default function showToast(
  message: string,
  type: TypeOptions = "default"
) {
  return toast(message, {
    position: "top-right",
    theme: "light",
    type,
    style: {
      fontFamily: "'Geist Sans', sans-serif",
      fontSize: "0.875rem",
      lineHeight: "1.5",
    },
  })
}
