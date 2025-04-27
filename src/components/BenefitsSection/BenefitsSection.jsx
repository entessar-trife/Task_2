import "./BenefitsSection.css"
import TitleComponent from '../TitleComponent/TitleComponent'
import CardComponent from '../CardComponent/CardComponent'
import { BenefitsCardData } from '../../Data/BenefitsCardData'

function BenefitsSection() {
  return (
    <>
      <section className='benefitsSection pb-200 px-162'>
        <TitleComponent
          txt="Children Deserve Bright Future"
          title="Our Benefits"
          desc="With a dedicated team of
                experienced educators, state-of-the-art facilities, 
                and a comprehensive curriculum, we aim to lay a strong 
                foundation for your child's future."
        />
        <div className='benefitsCards'>
          {
            BenefitsCardData.map((e, index) => {
              return (
                <CardComponent
                  key={index}
                  x={e.x}
                  img={e.img}
                  title={e.title}
                  desc={e.desc}
                />
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default BenefitsSection