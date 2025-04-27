import { NavigateCardData } from "../../Data/NavigateCardData"
import CardComponent from "../CardComponent/CardComponent"
import TitleComponent from "../TitleComponent/TitleComponent"
import "./NavigateSection.css"

function NavigateSection() {
  return (
    <>
      <section className="px-162 pb-200">
        <TitleComponent
          txt="Explore More"
          title="Navigate through our Pages"
          desc="Your gateway to discovering a wealth of 
                valuable information about our kindergarten school, 
                Feel free to explore and learn more about the 
                enriching experiences that await your child at 
                our kindergarten school"
        />
        <div className="navigateCards">
          {NavigateCardData.map((e, index) => {
            return (
              <CardComponent
                key={index}
                x={e.x}
                img={e.img}
                title={e.title}
                desc={e.desc}
                btn={e.btn}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default NavigateSection