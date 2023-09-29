import { PropTypes } from 'prop-types'
import './ProductionsPage.css'

import HeadLine from '../components/HeadLine'
import { Button } from './App'
import { Paragraphs } from './AboutPage'
import ViewMore from '../components/ViewMore'

function Piece({ text }) {
  return (
    <figure className='piece'>
      <div></div>
      <aside>
        <p>{text}</p>
        <ViewMore text='READ MORE' color='#fff' />
      </aside>
    </figure>
  )
}

Piece.propTypes = {
  text: PropTypes.string
}

function Baner({ text, title, orangeTitle }) {
  return (
    <article className='baner'>
      <div>
        <h4 style={{ fontSize: '40px' }}>{title}</h4>
        <h4 style={{ fontSize: '40px', color: '#e17226' }}>{orangeTitle}</h4>
      </div>
      <p>{text}</p>
    </article>
  )
}

Baner.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  orangeTitle: PropTypes.string
}

export default function ProductionsPage() {
  return (
    <>
      <section className='productions_page'>
        <HeadLine
          title='03_ALL PRODUCTIONS'
          orangeTitle='OLDC'
          shadowText='PRODUCTIONS'
          shadowColor='#e5e5e5'
        />
        <Piece text='Le invitamos a estar al corriente de nuestras novedades y no perderse ningún detalle de nuestras presentaciones' />
        <Baner
          text='Le invitamos a estar al corriente de nuestras novedades y no perderse ningún detalle de nuestras presentaciones'
          title='_NEW SEASON'
          orangeTitle='NEW EXPERIENCE'
        />
        <Piece text='Le invitamos a estar al corriente de nuestras novedades y no perderse ningún detalle de nuestras presentaciones' />
        <Piece text='Le invitamos a estar al corriente de nuestras novedades y no perderse ningún detalle de nuestras presentaciones' />
        <Piece text='Le invitamos a estar al corriente de nuestras novedades y no perderse ningún detalle de nuestras presentaciones' />
        <Piece text='Le invitamos a estar al corriente de nuestras novedades y no perderse ningún detalle de nuestras presentaciones' />
        <HeadLine
          title='_PARTNERSHIP'
          orangeTitle='ON OUR SIDE'
          shadowText='PARTNERSHIPS'
          shadowColor='#e5e5e5'
        />
        <Paragraphs />
        <div className='slider'>
          <div>
            <p>
              Le invitamos a estar al corriente de nuestras novedades y no
              perderse ningún detalle
            </p>
            <ViewMore text='VIEW MORE' color='#fff' />
          </div>
        </div>
        <Baner
          text='Le invitamos a estar al corriente de nuestras novedades y no perderse ningún detalle de nuestras presentaciones'
          title='_FROM HAVANA'
          orangeTitle='TO LONDON'
        />
      </section>
      <Button to='/' text='Home' />
    </>
  )
}
