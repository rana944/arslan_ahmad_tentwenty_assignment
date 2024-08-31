import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const WatchIcon = (props: SvgProps) => (
  <Svg
    width={props.width || 18}
    height={props.height || 18}
    fill="none"
    {...props}
  >
    <Path
      fill={props.fill || "#fff"}
      d="M16.817 1.163A4.076 4.076 0 0 0 13.972 0H4.007C2.927 0 1.93.415 1.163 1.183A3.94 3.94 0 0 0 0 4.007v9.965c0 1.08.415 2.076 1.183 2.845A3.972 3.972 0 0 0 4.028 18h9.944c1.08 0 2.076-.415 2.845-1.183A3.972 3.972 0 0 0 18 13.972V4.007a4.19 4.19 0 0 0-1.183-2.844ZM12.29 9.509l-5.211 3.01a.477.477 0 0 1-.291.083.477.477 0 0 1-.29-.083.592.592 0 0 1-.291-.519V5.98c0-.208.103-.416.29-.52a.62.62 0 0 1 .602 0l5.211 3.01c.187.104.291.312.291.52a.612.612 0 0 1-.311.519Z"
    />
  </Svg>
)
export default WatchIcon;
