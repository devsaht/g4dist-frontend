
export default function Inicio() {

  const divTitleStyles = {
    display:"flex",
    flexDirection:"row",
    padding:"12px",
    fontSize:"32px",
    borderRadius:"4px",
    border:"2px solid rgb(13, 110, 253)",
    marginBottom:"16px"
  }

  const btnStyles = {
    padding:"6px 12px",
    fontSize:"16px",
    borderRadius:"4px",
    backgroundColor:"rgb(13, 110, 253)",
    marginLeft:"32px",
    color:"white"
  }

  return (
    <div className="container">
      <div className="py-4 d-flex flex-row justify-content-around">
        <img src="images/donation_box.png" alt="" />
        <img src="images/donate.png" alt="" />
      </div>
    </div>
  );
}
