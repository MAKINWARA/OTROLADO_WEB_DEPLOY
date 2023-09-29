import HeadLine from '../components/HeadLine'
import { navigate } from '../utils/navigate'
import { PropTypes } from 'prop-types'

import ViewMore from '../components/ViewMore'
import './AboutPage.css'

function Button2() {
  return <button onClick={() => navigate('/')}>Home</button>
}

export function Paragraphs({ buttonText }) {
  return (
    <div className='paragraphs'>
      <div>
        <p>
          In July 2018, a small group of young and talented artists met in a
          studio in Havana - Cuba, to work together on a new creative project.
          They couldn&#39;t be more different, but they were united by talents
          forged in curiosity and artistic ambition, an unlimited commitment to
          what they wanted to build and a long history together as leading
          figures of Cuban Contemporary Dance. From these meetings the first
          pieces were born under the leadership of the dancer and choreographer
          Norge Cedeño, who, hand in hand with the incredible capacity of Thais
          Suarez and Niosbel González, challenged the ways of doing things on
          the island. It was these first productions that laid the foundations
          for a dynamic collaboration, which months later led to the founding of
          the OtroLado Dance Company. His vision was clear, to create
          unprecedented works of art, as wonderful, challenging and
          unpredictable as life itself.
        </p>
        <p>
          To make it possible, it was necessary to create a detailed and
          virtuous dance, competitive at the highest level, but deeply visceral.
          A dance that seduces and excites, that is born and dies in the depths
          of the bowels and amplifies the essence of the human spirit.
          <br />
          It was essential to surprise us in order to surprise. Embrace
          uncertainty to transcend creative formulas and make each day a great
          opportunity to evolve ourselves.
          <br />
          Learn from collaboration with the best in all disciplines of art to go
          beyond Dance and make the scene a magical universe where every detail
          counts.
          <br />
          La Compañía OtroLado, con sus movimientos líricos y su inquietante
          presencia durante todo el espectáculo, fue completamente fascinante...
          Una actuación mínima de estos bailarines es tan poderosa y dinámica
          como la producción más completa”.
          <cite>Rachael F. Goldberg, Broadway World</cite>
        </p>
      </div>
      {buttonText && <ViewMore text={buttonText} color={'black'} />}
    </div>
  )
}

Paragraphs.propTypes = {
  buttonText: PropTypes.string
}

export default function AboutPage() {
  return (
    <>
      <section className='about_page'>
        <HeadLine
          title={'02_ABOUT US'}
          orangeTitle={'DANCE COMPANY'}
          shadowText={'OLDC'}
          shadowColor={'#e5e5e5'}
        />
        <div className='blackScreen'></div>
        <div className='historyDescription'>
          <main>
            <h4>
              Le invitamos a estar al corriente de nuestras novedades y no
              perderse ningún detalle de nuestras presentaciones.
            </h4>
            <aside>
              <ViewMore text={'READ MORE'} color={'black'} />
            </aside>
          </main>
          <Paragraphs />
        </div>
        <div className='newExpirience'>
          <main>
            <HeadLine
              title={'_NEW SEASON'}
              orangeTitle={'NEW EXPRERIENCE'}
              shadowText={'OUR TEAM'}
              shadowColor={'#e5e5e5'}
            />
          </main>
          <div>
            <figure className='photo_1'></figure>
            <figure className='photo_2'></figure>
            <figure className='photo_3'>
              <figure></figure>
              <figure></figure>
            </figure>
            <figure className='photo_4'>
              <p className='text'>
                Le invitamos a estar al corriente de nuestras novedades y no
                perderse ningún detalle de nuestras presentaciones.
              </p>
              <span>
                <ViewMore text={'READ MORE'} color={'white'} />
              </span>
            </figure>
          </div>
          <Paragraphs buttonText={'SEE OUR LATES PRODUCTIONS'} />
        </div>
      </section>
      <Button2 />
    </>
  )
}
