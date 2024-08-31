import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"
const LibraryIcon = (props: SvgProps) => (
  <Svg
    width={props.width || 18}
    height={props.height || 18}
    fill="none"
    {...props}
  >
    <Rect width={18} height={14.526} y={3.474} fill={props.fill || "#827D88"} rx={0.947} />
    <Path
      fill={props.fill || "#827D88"}
      d="M16.105 1.579c.505 0 .632.526.632.79H.947c0-.632.421-.79.632-.79h14.526ZM15.246 0c.435 0 .543.421.543.632H2.21c0-.506.363-.632.544-.632h12.492Z"
    />
  </Svg>
)
export default LibraryIcon;
