
export default function SobreNosotros() {

  const divTitleStyles = {
    display:"flex",
    flexDirection:"row",
    padding:"12px",
    fontSize:"32px",
    borderRadius:"4px",
    border:"2px solid rgb(13, 110, 253)",
    marginBottom:"16px"
  }

  const spanStyles = {
    
  }

  return (
    <div className="container">
      <div className="py-4 d-flex flex-row justify-content-around" style={{backgroundColor:"black", color:"white"}}>
        <div style={{backgroundColor:"black", color:"white", width:"420px"}}>
          <h4 >SOBRE NOSOTROS</h4>
          <span className="text-left" >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </span>
        </div>
        <img src="images/sobre_nosotros.png" alt="" />
      </div>
    </div>
  );
}
