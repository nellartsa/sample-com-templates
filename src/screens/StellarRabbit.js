import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../designs/css/template2.css'
import logo from '../designs/img/t2-logo.png'
import hubble from '../designs/img/t2-hubble.png'
import proj1 from '../designs/img/t2-project1.png'
import proj2 from '../designs/img/t2-project2.png'
import proj3 from '../designs/img/t2-project3.png'
import team from '../designs/img/t2-team.png'
import cert from '../designs/img/t2-certificate.png'
import sponsor1 from '../designs/img/t2-comeet.png'
import sponsor2 from '../designs/img/t2-platzi.png'
import telescope from '../designs/img/t2-gali-telescope.png'

import arrowRight from '../designs/svg/t2-arrowRight.svg'
import share from '../designs/svg/t2-share.svg'
import rocket from '../designs/svg/t2-rocket.svg'
import insta from '../designs/svg/t2-insta.svg'
import twitter from '../designs/svg/t2-twitter.svg'

const StellarRabbit = () => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (isActive) {
      document.body.classList.add('freeze')
    } else {
      document.body.classList.remove('freeze')
    }
  }, [isActive])
  return (
    <>
      <section id='t2' className='bg-gradient'>
        <div className='navi'>
          <div className='container'>
            <div className='navi-brand'>
              <b className='txt-cap fw-reg'>
                <b>stellar</b> rabbit
              </b>
            </div>

            <div className={`navi-links-con ${isActive ? 'active' : ''}`}>
              <div className='navi-links'>
                <Link to='/sample-com-templates'>
                  <div className='link txt-upper'>projects</div>
                </Link>
                <Link to='/sample-com-templates'>
                  <div className='link txt-upper'>about</div>
                </Link>
                <Link to='/sample-com-templates'>
                  <div className='link txt-upper'>testimonials</div>
                </Link>
                <Link to='/sample-com-templates'>
                  <div className='link bg-greenlime fc-blue txt-upper'>
                    contact
                  </div>
                </Link>
              </div>
            </div>

            <div
              onClick={() => setIsActive(!isActive)}
              className={`menu-fragments ${isActive ? 'active' : ''}`}
            >
              <div className='shards'></div>
              <div className='shards'></div>
              <div className='shards'></div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='background'></div>

          <div className='mission-segment'>
            <div className='txt-group'>
              <h6 className='fw-reg txt-upper spacing-2'>our mission</h6>
              <h1 className='fw-reg lh-1'>
                Your <b>first step</b> in <b>space science</b>
              </h1>
              <p>
                We inspire you to take your first steps in space science with
                exclusive content designed by experts in science, design and
                education. <b>Welcome to the mission!</b>
              </p>
              <button className='bg-greenlime fw-med txt-upper spacing-2'>
                i want a free month
              </button>
            </div>
            <div className='img-con'>
              <img className='dis-block w-100p' src={hubble} alt='hubble' />
            </div>
          </div>

          <div className='projects-segment'>
            <div className='overline'></div>
            <div className='card'>
              <img
                className='dis-block w-100p'
                src={proj1}
                alt='introduction to drones'
              />
              <div className='padding'>
                <div className='info-group fc-black-700'>
                  <h4 className='fw-bold'>Introduction to drones</h4>
                  <p className='fs-16'>Description of the project</p>
                </div>
                <div className='interaction-group'>
                  <Link
                    to='/sample-com-templates'
                    className='fc-purple fw-med txt-upper spacing-2'
                  >
                    learn more
                    <img src={arrowRight} alt='arrow' />
                  </Link>
                  <button>
                    <img src={share} alt='share' />
                  </button>
                </div>
              </div>
            </div>

            <div className='card'>
              <img className='dis-block w-100p' src={proj2} alt='sputnik' />
              <div className='padding'>
                <div className='info-group fc-black-700'>
                  <h4 className='fw-bold'>Sputnik</h4>
                  <p className='fs-16'>Description of the project</p>
                </div>
                <div className='interaction-group'>
                  <Link
                    to='/sample-com-templates'
                    className='fc-purple fw-med txt-upper spacing-2'
                  >
                    learn more
                    <img src={arrowRight} alt='arrow' />
                  </Link>
                  <button>
                    <img src={share} alt='share' />
                  </button>
                </div>
              </div>
            </div>

            <div className='card'>
              <img
                className='dis-block w-100p'
                src={proj3}
                alt='hummingbird mission'
              />
              <div className='padding'>
                <div className='info-group fc-black-700'>
                  <h4 className='fw-bold'>Hummingbird Mission</h4>
                  <p className='fs-16'>Description of the project</p>
                </div>
                <div className='interaction-group'>
                  <Link
                    to='/sample-com-templates'
                    className='fc-purple fw-med txt-upper spacing-2'
                  >
                    learn more
                    <img src={arrowRight} alt='arrow' />
                  </Link>
                  <button>
                    <img src={share} alt='share' />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='about-segment'>
            <div className='img-con'>
              <img className='w-100p dis-block' src={team} alt='team' />
            </div>
            <div className='txt-group'>
              <h6 className='fw-reg txt-upper spacing-2'>about us</h6>
              <h2 className='txt-cap fw-reg lh-1'>
                <b>stellar</b> rabbit <b>team</b>
              </h2>
              <p>
                We are an initiative to disseminate science, space knowledge,
                and all Latin American projects using digital and physical
                content.
                <br />
                <br />
                We develop brands, products, content and experiences to promote
                projects that impact the Latin American space industry.
              </p>

              <button
                to='/sample-com-templates'
                className='bg-greenlime fc-blue fw-med txt-upper spacing-2'
              >
                i want a free month
              </button>
            </div>
          </div>

          <div className='testimonial-segment'>
            <h6 className='fw-reg txt-upper spacing-2 txt-center'>
              mission crew
            </h6>
            <h2 className='txt-cap txt-center lh-1'>testimonials</h2>

            <div className='testimony-group'>
              <div className='clear-card txt-center'>
                <img src={rocket} alt='rocket' />
                <p className='fs-16'>
                  I met them at Campus Party years ago and I fell in love with
                  their design, but most of all with the compromise to
                  disseminate science and tech. I’m a huge fan!
                </p>
                <h4 className='txt-cap'>vira cabrera</h4>
              </div>

              <div className='clear-card txt-center'>
                <img src={rocket} alt='rocket' />
                <p className='fs-16'>
                  Their designs are such beautiful. But their mission and spirit
                  to disseminate are even better. I recommend them a lot!
                </p>
                <h4 className='txt-cap'>Miranda Luna de Urano</h4>
              </div>

              <div className='clear-card txt-center'>
                <img src={rocket} alt='rocket' />
                <p className='fs-16'>
                  I recommend the content and the scientific “spirit” of the
                  project. It focuses to open our minds with information so
                  interesting and important that the creators share with us.
                </p>
                <h4 className='txt-cap'>Cirilo Reyes Cruz</h4>
              </div>
            </div>
          </div>

          <div className='ticket-segment'>
            <div className='txt-group'>
              <h6 className='fw-reg txt-upper fw-reg spacing-2'>
                get your ticket now
              </h6>
              <h2 className='txt-cap lh-1'>comeet cat</h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className='bg-greenlime fc-blue txt-upper spacing-2'>
                name an asteroid now
              </button>
            </div>

            <div className='img-con'>
              <img className='w-100p' src={cert} alt='certificate' />
              <div className='sponsored'>
                <img src={sponsor1} alt='comeet' />
                <img src={sponsor2} alt='platzi' />
              </div>
            </div>
          </div>

          <div className='subscribe-segment'>
            <div className='txt-group'>
              <h6 className='fw-reg txt-upper spacing-2'>start now</h6>
              <h2 className='lh-1'>1 free month</h2>
              <p>
                Discover the most relevant information about the space before
                anyone else with our content subscription. Try a free month.
              </p>

              <div className='input-groups'>
                <div className='input-group'>
                  <h5 className='txt-cap fw-reg'>name:</h5>
                  <input defaultValue='Jhon Carvajal' />
                </div>

                <div className='input-group'>
                  <h5 className='txt-cap fw-reg'>email:</h5>
                  <input defaultValue='contact@stellarrabbit.com' />
                </div>

                <button className='bg-greenlime fc-blue txt-center txt-upper fw-med spacing-2'>
                  submit registration
                </button>
              </div>
            </div>

            <div className='img-con'>
              <img className='w-100p' src={telescope} alt='gali telescope' />
            </div>
          </div>

          <footer>
            <div className='logo-group'>
              <img src={logo} alt='logo' />
              <div className='brand fw-reg txt-cap fc-purple'>
                <b>stellar</b> rabbit
              </div>
            </div>

            <div className='social-group'>
              <Link to='/sample-com-templates'>www.conejoestelar.com</Link>
            </div>

            <div className='social-group'>
              <img src={insta} alt='insta' />
              <Link to='/sample-com-templates'>@conejoestelar</Link>
            </div>

            <div className='social-group'>
              <img src={twitter} alt='twitter' />
              <Link to='/sample-com-templates'>@hector_reyes</Link>
            </div>
          </footer>
        </div>
      </section>
    </>
  )
}

export default StellarRabbit
