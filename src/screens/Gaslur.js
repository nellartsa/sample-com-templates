import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../designs/css/template1.css'

import popular from '../designs/img/t1-popular.png'
import owner from '../designs/img/t1-popowner.png'
import a1 from '../designs/img/t1-auction1.png'
import a2 from '../designs/img/t1-auction2.png'
import a3 from '../designs/img/t1-auction3.png'
import a4 from '../designs/img/t1-auction4.png'
import d1 from '../designs/img/t1-discover1.png'
import d2 from '../designs/img/t1-discover2.png'
import d3 from '../designs/img/t1-discover3.png'
import d4 from '../designs/img/t1-discover4.png'
import d5 from '../designs/img/t1-discover5.png'
import d6 from '../designs/img/t1-discover6.png'
import d7 from '../designs/img/t1-discover7.png'
import d8 from '../designs/img/t1-discover8.png'
import insta from '../designs/img/t1-insta.png'
import fb from '../designs/img/t1-fb.png'
import twitter from '../designs/img/t1-twitter.png'

import heart from '../designs/svg/t1-heart.svg'
import arrowRight from '../designs/svg/t1-arrow-right.svg'
import started1 from '../designs/svg/t1-started1.svg'
import started2 from '../designs/svg/t1-started2.svg'
import started3 from '../designs/svg/t1-started3.svg'
import started4 from '../designs/svg/t1-started4.svg'
import category from '../designs/svg/t1-category.svg'
import dropdown from '../designs/svg/t1-dropdown.svg'
import filter from '../designs/svg/t1-filter.svg'

const Gaslur = () => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('freeze')
  }, [isActive])
  return (
    <>
      <section id='t1' className='bg-dark'>
        <div className='navi'>
          <div className='container'>
            <div className='navi-brand'>gaslur</div>

            <div className={`navi-links-con ${isActive ? 'active' : ''}`}>
              <div className='navi-link-g1'>
                <Link to='/sample-com-templates/Gaslur'>
                  <div className='link active'>home</div>
                </Link>
                <Link to='/sample-com-templates/Gaslur'>
                  <div className='link'>my profile</div>
                </Link>
                <Link to='/sample-com-templates/Gaslur'>
                  <div className='link'>activity</div>
                </Link>
                <Link to='/sample-com-templates/Gaslur'>
                  <div className='link'>how it works</div>
                </Link>
              </div>

              <div className='navi-link-g2'>
                <Link to='/sample-com-templates/Gaslur'>
                  <div className='link bordered'>create</div>
                </Link>
                <Link to='/sample-com-templates/Gaslur'>
                  <div className='link'>sign in</div>
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
          <div className='welcome-segment'>
            <div className='txt-group'>
              <h1 className='fw-sbold spacing-neg1'>
                Discover, collect, and charity in extraordinary NFT marketplace
              </h1>
              <h5 className='fw-reg'>
                In aenean posuere lorem risus nec. Tempor tincidunt aenean purus
                purus vestibulum nibh mi venenatis
              </h5>

              <div className='btn-group'>
                <Link to='/sample-com-templates/Gaslur'>
                  <div className='btn txt-cap bg-gradient'>explore</div>
                </Link>
                <Link to='/sample-com-templates/Gaslur'>
                  <div className='btn bordered txt-cap fc-greylight'>
                    create
                  </div>
                </Link>
              </div>
            </div>

            <div className='popular-con'>
              <div className='card'>
                <img className='nft w-100p dis-block' src={popular} alt='' />
                <div className='info-group'>
                  <div className='prof-img-con'>
                    <img className='w-100p dis-block' src={owner} alt='' />
                  </div>

                  <div className='owner-price'>
                    <div className='fw-sbold'>Laura</div>
                    <div className='txt-cap fc-greylight fw-med'>0.21 weth</div>
                  </div>

                  <div className='likes'>
                    <div className='fw-sbold txt-upper'>we are here</div>
                    <div className='counts'>
                      <img src={heart} alt='heart' />
                      <span>25</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='ellipse-1'></div>
              <div className='ellipse-2'></div>
            </div>
          </div>

          <div className='auction-segment'>
            <div className='element-header'>
              <h3 className='txt-cap fw-med spacing-neg1'>hot auctions</h3>
              <Link to='/sample-com-templates/Gaslur'>
                <h6 className='txt-cap fw-reg fc-greylight'>
                  view all
                  <img src={arrowRight} alt='' />
                </h6>
              </Link>
            </div>

            <div className='items-group'>
              <div className='card'>
                <img className='nft w-100p dis-block' src={a1} alt='' />
                <div className='info-group'>
                  <div className='main'>
                    <div className='fw-sbold'>Lorem Ipsum</div>
                    <div className='txt-cap fw-med'>1.20 weth</div>
                  </div>
                  <div className='divider'></div>
                  <div className='bid'>
                    <div className='time-end fc-greydark'>
                      Ends in <span className='fc-white'>01.34.45</span>
                    </div>
                    <Link to='/sample-com-templates/Gaslur'>
                      <div className='bid-btn fw-med txt-cap fc-greylighter'>
                        bid
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='card'>
                <img className='nft w-100p dis-block' src={a2} alt='' />
                <div className='info-group'>
                  <div className='main'>
                    <div className='fw-sbold'>Dolor sit amet</div>
                    <div className='txt-cap fw-med'>0.21 weth</div>
                  </div>
                  <div className='divider'></div>
                  <div className='bid'>
                    <div className='time-end fc-greydark'>
                      Ends in <span className='fc-white'>01.34.45</span>
                    </div>
                    <Link to='/sample-com-templates/Gaslur'>
                      <div className='bid-btn fw-med txt-cap fc-greylighter'>
                        bid
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='card'>
                <img className='nft w-100p dis-block' src={a3} alt='' />
                <div className='info-group'>
                  <div className='main'>
                    <div className='fw-bold'>Dignissim cur..</div>
                    <div className='txt-cap fw-med'>0.01 weth</div>
                  </div>
                  <div className='divider'></div>
                  <div className='bid'>
                    <div className='time-end fc-greydark'>
                      Ends in <span className='fc-white'>56.44.45</span>
                    </div>
                    <Link to='/sample-com-templates/Gaslur'>
                      <div className='bid-btn fw-med txt-cap fc-greylighter'>
                        bid
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='card'>
                <img className='nft w-100p dis-block' src={a4} alt='' />
                <div className='info-group'>
                  <div className='main'>
                    <div className='fw-bold'>Amet pellente..</div>
                    <div className='txt-cap fw-med'>0.55 weth</div>
                  </div>
                  <div className='divider'></div>
                  <div className='bid'>
                    <div className='time-end fc-greydark'>
                      Ends in <span className='fc-white'>01.34.45</span>
                    </div>
                    <Link to='/sample-com-templates/Gaslur'>
                      <div className='bid-btn fw-med txt-cap fc-greylighter'>
                        bid
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='started-segment'>
            <h3 className='txt-center txt-cap fw-med'>getting started</h3>
            <h6 className='txt-center fw-reg'>
              Eu, molestie commodo, enim pellenteue turpis integer sagittis
            </h6>

            <div className='services-group'>
              <div className='card'>
                <img src={started1} alt='rocket' />
                <p>Connect your wallet</p>
              </div>

              <div className='card'>
                <img src={started2} alt='rocket' />
                <p>Posuere urna, sit amet molestie leo</p>
              </div>

              <div className='card'>
                <img src={started3} alt='rocket' />
                <p>Semper pretium libero sed quam ac integer ut</p>
              </div>

              <div className='card'>
                <img src={started4} alt='rocket' />
                <p>Lectus volutpat magna vitae in arcu</p>
              </div>
            </div>
          </div>

          <div className='discover-segment'>
            <div className='element-header'>
              <h3 className='txt-cap fw-med spacing-neg1'>discover</h3>
              <div className='filter-group'>
                <button>
                  <h6 className='txt-cap fw-med'>
                    <img src={category} alt='category' />
                    category
                  </h6>
                </button>
                <button>
                  <h6 className='txt-cap fw-med'>
                    cheapest
                    <img src={dropdown} alt='dropdown' />
                  </h6>
                </button>
                <button>
                  <h6 className='txt-cap fw-med'>
                    newest
                    <img src={dropdown} alt='dropdown' />
                  </h6>
                </button>
                <button className='bordered bg-gradient'>
                  <h6 className='txt-cap fw-med'>
                    <img src={filter} alt='filter' />
                    filter
                  </h6>
                </button>
              </div>
            </div>

            <div className='items-group'>
              <div className='card'>
                <img className='nft w-100p dis-block' src={d1} alt='' />
                <div className='info-group'>
                  <div className='main'>
                    <div className='fw-sbold'>Lorem Ipsum</div>
                    <div className='txt-cap fw-med'>1.20 weth</div>
                  </div>
                  <div className='divider'></div>
                  <div className='bid'>
                    <div className='time-end fc-greydark'>
                      Ends in <span className='fc-white'>01.34.45</span>
                    </div>
                    <Link to='/sample-com-templates/Gaslur'>
                      <div className='bid-btn fw-med txt-cap fc-greylighter'>
                        buy
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='card'>
                <img className='nft w-100p dis-block' src={d2} alt='' />
                <div className='info-group'>
                  <div className='main'>
                    <div className='fw-sbold'>Dolor sit amet</div>
                    <div className='txt-cap fw-med'>0.21 weth</div>
                  </div>
                  <div className='divider'></div>
                  <div className='bid'>
                    <div className='time-end fc-greydark'>
                      Ends in <span className='fc-white'>01.34.45</span>
                    </div>
                    <Link to='/sample-com-templates/Gaslur'>
                      <div className='bid-btn fw-med txt-cap fc-greylighter'>
                        buy
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='card'>
                <img className='nft w-100p dis-block' src={d3} alt='' />
                <div className='info-group'>
                  <div className='main'>
                    <div className='fw-bold'>Dignissim cur..</div>
                    <div className='txt-cap fw-med'>0.01 weth</div>
                  </div>
                  <div className='divider'></div>
                  <div className='bid'>
                    <div className='time-end fc-greydark'>
                      Ends in <span className='fc-white'>56.44.45</span>
                    </div>
                    <Link to='/sample-com-templates/Gaslur'>
                      <div className='bid-btn fw-med txt-cap fc-greylighter'>
                        buy
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='card'>
                <img className='nft w-100p dis-block' src={d4} alt='' />
                <div className='info-group'>
                  <div className='main'>
                    <div className='fw-bold'>Amet pellente..</div>
                    <div className='txt-cap fw-med'>0.55 weth</div>
                  </div>
                  <div className='divider'></div>
                  <div className='bid'>
                    <div className='time-end fc-greydark'>
                      Ends in <span className='fc-white'>01.34.45</span>
                    </div>
                    <Link to='/sample-com-templates/Gaslur'>
                      <div className='bid-btn fw-med txt-cap fc-greylighter'>
                        buy
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='card'>
                <img className='nft w-100p dis-block' src={d5} alt='' />
                <div className='info-group'>
                  <div className='main'>
                    <div className='fw-sbold'>Lorem Ipsum</div>
                    <div className='txt-cap fw-med'>1.20 weth</div>
                  </div>
                  <div className='divider'></div>
                  <div className='bid'>
                    <div className='time-end fc-greydark'>
                      Ends in <span className='fc-white'>01.34.45</span>
                    </div>
                    <Link to='/sample-com-templates/Gaslur'>
                      <div className='bid-btn fw-med txt-cap fc-greylighter'>
                        bid
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='card'>
                <img className='nft w-100p dis-block' src={d6} alt='' />
                <div className='info-group'>
                  <div className='main'>
                    <div className='fw-sbold'>Dolor sit amet</div>
                    <div className='txt-cap fw-med'>0.21 weth</div>
                  </div>
                  <div className='divider'></div>
                  <div className='bid'>
                    <div className='time-end fc-greydark'>
                      Ends in <span className='fc-white'>01.34.45</span>
                    </div>
                    <Link to='/sample-com-templates/Gaslur'>
                      <div className='bid-btn fw-med txt-cap fc-greylighter'>
                        bid
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='card'>
                <img className='nft w-100p dis-block' src={d7} alt='' />
                <div className='info-group'>
                  <div className='main'>
                    <div className='fw-bold'>Dignissim cur..</div>
                    <div className='txt-cap fw-med'>0.01 weth</div>
                  </div>
                  <div className='divider'></div>
                  <div className='bid'>
                    <div className='time-end fc-greydark'>
                      Ends in <span className='fc-white'>56.44.45</span>
                    </div>
                    <Link to='/sample-com-templates/Gaslur'>
                      <div className='bid-btn fw-med txt-cap fc-greylighter'>
                        bid
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='card'>
                <img className='nft w-100p dis-block' src={d8} alt='' />
                <div className='info-group'>
                  <div className='main'>
                    <div className='fw-bold'>Amet pellente..</div>
                    <div className='txt-cap fw-med'>0.55 weth</div>
                  </div>
                  <div className='divider'></div>
                  <div className='bid'>
                    <div className='time-end fc-greydark'>
                      Ends in <span className='fc-white'>01.34.45</span>
                    </div>
                    <Link to='/sample-com-templates/Gaslur'>
                      <div className='bid-btn fw-med txt-cap fc-greylighter'>
                        bid
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link to='/sample-com-templates/Gaslur'>
              <button className='more fc-greydark txt-upper spacing-2'>
                load more
              </button>
            </Link>
          </div>

          <footer>
            <div className='up-ft'>
              <div className='side-txt'>
                <h4 className='fw-med'>
                  Etiam et id tincidunt faucibus mollis a sociis pretium
                  fermentum quis magna faucibus lacus.
                </h4>
              </div>

              <div className='ft-marketplace txt-cap'>
                <h4 className='fw-reg'>marketplace</h4>
                <div className='ft-group-link'>
                  <Link to='/sample-com-templates/Gaslur'>
                    <h6 className='fc-white fw-reg fc-greylight'>home</h6>
                  </Link>
                  <Link to='/sample-com-templates/Gaslur'>
                    <h6 className='fc-white fw-reg fc-greylight'>activity</h6>
                  </Link>
                  <Link to='/sample-com-templates/Gaslur'>
                    <h6 className='fc-white fw-reg fc-greylight'>dicover</h6>
                  </Link>
                  <Link to='/sample-com-templates/Gaslur'>
                    <h6 className='fc-white fw-reg fc-greylight'>learn more</h6>
                  </Link>
                </div>
              </div>

              <div className='ft-company txt-cap'>
                <h4 className='fw-reg'>company</h4>
                <div className='ft-group-link'>
                  <Link to='/sample-com-templates/Gaslur'>
                    <h6 className='fc-white fw-reg fc-greylight'>about us</h6>
                  </Link>
                  <Link to='/sample-com-templates/Gaslur'>
                    <h6 className='fc-white fw-reg fc-greylight'>services</h6>
                  </Link>
                  <Link to='/sample-com-templates/Gaslur'>
                    <h6 className='fc-white fw-reg fc-greylight'>portfolio</h6>
                  </Link>
                </div>
              </div>

              <div className='ft-contact txt-cap'>
                <h4 className='fw-reg'>contact</h4>
                <div className='ft-group-link'>
                  <Link to='/sample-com-templates/Gaslur'>
                    <h6 className='fc-white fw-reg fc-greylight'>facebook</h6>
                  </Link>
                  <Link to='/sample-com-templates/Gaslur'>
                    <h6 className='fc-white fw-reg fc-greylight'>instagram</h6>
                  </Link>
                  <Link to='/sample-com-templates/Gaslur'>
                    <h6 className='fc-white fw-reg fc-greylight'>twitter</h6>
                  </Link>
                  <Link to='/sample-com-templates/Gaslur'>
                    <h6 className='fc-white fw-reg fc-greylight'>email</h6>
                  </Link>
                </div>
              </div>
            </div>
            <div className='divider'></div>
            <div className='lw-ft'>
              <div className='social-group'>
                <img src={insta} alt='' />
                <img src={fb} alt='' />
                <img src={twitter} alt='' />
              </div>
              <div className='copyrights txt-cap'>copyrights 2021 gaslur</div>
            </div>
          </footer>
        </div>
      </section>
    </>
  )
}

export default Gaslur
