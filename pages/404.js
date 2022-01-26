import { Box } from "@skynexui/components";
import appConfig from "../config.json";

export default function Chat() {
  return (
    <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: appConfig.theme.colors.primary["yellow.950"],
          backgroundImage:
            "url(https://www.designbolts.com/wp-content/uploads/2015/12/Missing-File-404-error-page-designs.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      />
  )
}