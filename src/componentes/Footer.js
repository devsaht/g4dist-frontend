
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
    <div className="container fixed-bottom">
      <div className="py-4 d-flex flex-row justify-content-around" style={{backgroundColor:"black", color:"white"}}>
        <p>Atención Al Cliente</p>
        <p>La Empresa</p>
        <p>Productos</p>
        <p>Redes sociales</p>
      </div>
    </div>
  );
}
