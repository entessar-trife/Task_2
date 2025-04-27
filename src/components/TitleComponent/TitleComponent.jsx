import "./TitleComponent.css"

function TitleComponent({ txt, desc, title }) {
  return (
    <>
      <div className='titleComponent'>
        <div className='smallTitle'> {txt} </div>
        <h2> {title} </h2>
        <p className='fs-20'> {desc} </p>
      </div>
    </>
  )
}

export default TitleComponent