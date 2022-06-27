// functional component
function MyImage(props){
    return(
      <img alt="Brown Rice Milkshake" 
           src={require("../dog.jpg")}
           style={
            {
              "borderColor":props.borderColor,
              "borderStyle":"solid",
              "borderWidth":"10px"
            }
           }
      />
    )
  }

  export default MyImage;