const Box = ({ width, height, borderRadius, backgroundColor } : {
  width?: string, height?: string, borderRadius?: string, backgroundColor?: string 
}) => {
  return <div style={{
    height: height || "100px",
    width: width || "100px",
    borderRadius: borderRadius || "0",
    backgroundColor: backgroundColor || "black"
  }}/>
}

export default Box;