
const Info = ({count, info}) => {
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px"
    }}>
        <p>{count}</p>
        <p>{info}</p>
    </div>
  )
}

export default Info