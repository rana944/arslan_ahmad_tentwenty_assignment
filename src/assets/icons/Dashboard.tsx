import * as React from "react"
import Svg, { SvgProps, Circle } from "react-native-svg"
const DashboardIcon = (props: SvgProps) => (
  <Svg
    width={props.width || 16}
    height={props.height || 16}
    fill="none"
    {...props}
  >
    <Circle cx={13} cy={3} r={3} fill={props.fill || "#827D88"} />
    <Circle cx={13} cy={13} r={3} fill={props.fill || "#827D88"} />
    <Circle cx={3} cy={13} r={3} fill={props.fill || "#827D88"} />
    <Circle cx={3} cy={3} r={3} fill={props.fill || "#827D88"} />
  </Svg>
)
export default DashboardIcon;
