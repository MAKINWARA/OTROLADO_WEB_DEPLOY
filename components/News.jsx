import './News.css'
import HeadLine from './HeadLine'

export default function News() {
  return (
    <div className='newsSection'>
      <HeadLine
        title={'01_NEWS'}
        orangeTitle={'WORK IN PROGRESS'}
        phrase={
          'Le invitamos a estar al corriente de nuestras novedades y no perderse ningún detalle de nuestras presentaciones, giras, talleres, eventos, oportunidades, etc. Sea parte de nuestro universo a cada instante.'
        }
        buttonText={'VIEW MORE'}
        buttonColor={'#fff'}
        shadowText={'01_'}
        shadowColor={'rgba(255,255,255,0.3)'}
      />
      <div className='allImages'>
        <div className='firstTwoImages'>
          <figure>
            <div className='_1'></div>
            <figcaption className='caption'>
              GRADUADO DE DANZA CONTEMPORANEA
              <br />
              <p style={{ fontSize: '16px' }}>DIRECTOR</p>
            </figcaption>
          </figure>
          <figure>
            <div className='_2'></div>
            <figcaption className='caption'>
              GRADUADO DE DANZA CONTEMPORANEA
              <br />
              <p style={{ fontSize: '16px' }}>DIRECTOR</p>
            </figcaption>
          </figure>
        </div>
        <div className='lastTwoImages'>
          <figure>
            <div className='_3'></div>
            <figcaption className='caption'>
              GRADUADO DE DANZA CONTEMPORANEA
              <br />
              <p style={{ fontSize: '16px' }}>DIRECTOR</p>
            </figcaption>
          </figure>
          <figure>
            <div className='_4'></div>
            <figcaption className='caption'>
              GRADUADO DE DANZA CONTEMPORANEA
              <br />
              <p style={{ fontSize: '16px' }}>DIRECTOR</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}
