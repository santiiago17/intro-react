import './Main.css'
import { Section } from '../Section/Section'

export const Main = () => {
  return (
    <main className='main-page'>
      <Section>
        <img src="src/img/enanito.jpg" alt="" />
      </Section>

      <Section>
        <h2>SECTION 2</h2>
        <p>This is the second section</p>
      </Section>

    </main>
  )
}