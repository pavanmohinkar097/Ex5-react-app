  functiongit App() {
  const headingStyle = {
    color: "black",
    fontSize: "34px",
    fontStyle:"italic",
    
  };

  const anotherStyle = {
    fontFamily:"sans-serif",
    background:"#41644A",
  }
  const finalStyle={
    ...headingStyle,
    ...anotherStyle,
  }
  const containerStyle = {
    border:"2px solid yellow",
    background:"red"
  }
  return (
    <div style ={containerStyle}>
      <h1 style={finalStyle}>Hello world ghxhsn hbSCB bc scbkjbcscb  snmb khbc  </h1>
    </div>
  );
}
    // Example=2if we have two different style objects on one element then how should.



export default App;
