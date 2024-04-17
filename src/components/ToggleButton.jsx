// const Path = (props) => (
//   <motion.path
//     fill="transparent"
//     strokeWidth="3"
//     stroke="hsl(0, 0%, 18%)"
//     strokeLinecap="round"
//     {...props}
//   />
// );

const ToggleButton = ({ open, handleClick }) => {
  function handleBtnClick() {
    handleClick();
  }
  return (
    <button
      style={{
        position: "fixed",
        top: 7,
        right: 20,
        zIndex: 5001,
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        padding: 0,
        border: open ? "2px solid rgb(10, 139, 198)" : "none",
        backgroundColor: "white",

        cursor: "pointer",
      }}
      className="shadow-2"
      onClick={handleBtnClick}
    >
      <span
        style={{
          position: "absolute",
          left: 14,
          top: open ? 28 : 20,
          backgroundColor: open ? "rgb(10, 139, 198)" : "black",
          height: "4px",
          width: "50%",
          borderRadius: "5px",
          transform: open ? "rotate(-45deg)" : undefined,
          transition: "0.3s",
        }}
      />

      <span
        style={{
          position: "absolute",
          left: 14,
          top: 28,
          background: "black",
          height: "4px",
          width: "50%",
          opacity: open ? "0" : "1",
          borderRadius: "5px",
          transition: "0.3s",
        }}
      />

      <span
        style={{
          position: "absolute",
          left: 14,
          top: open ? 28 : 36,
          backgroundColor: open ? "rgb(10, 139, 198)" : "black",
          height: "4px",
          width: "50%",
          transform: open ? "rotate(45deg)" : undefined,
          borderRadius: "5px",
          transition: "0.3s",
        }}
      />
    </button>
  );
};

export default ToggleButton;
