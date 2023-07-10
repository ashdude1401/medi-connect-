import '../styles/Procedure.css'

import proc1 from '../images/proc11.png'
import proc2 from '../images/proc1.png'
import proc3 from '../images/img1.png'

const Procedure = () => {
  return (
    <div id="procedure" className="bg-violet-500 text-white">
      <div className="procedure-container">
        <h1 className="flex justify-center">Our Process</h1>
        {/* 1st procedure */}
        <section className="big-feature-section">
          <div className="container flex big-feature-container">
            <div className="feature-img">
              <img src={proc1} alt="img" />
            </div>
            <div className="feature-desc flex">
              <h3>List your meds</h3>
              <p>
                Individuals and organizations donate their surplus medicine
                instead of destroying it.
              </p>
            </div>
          </div>
        </section>
        {/* 2nd procedure */}
        <section className="big-feature-section">
          <div
            className="container flex big-feature-container"
            id="second-big-feature-container"
          >
            <div className="feature-img">
              <img src={proc3} alt="img" />
            </div>
            <div className="feature-desc flex">
              <h3>Collection of listed meds</h3>
              <p>
                Medi-Connect matches donated medicine to community partners who
                need it
              </p>
            </div>
          </div>
        </section>
        {/*  3rd procedure*/}
        <section className="big-feature-section">
          <div className="container flex big-feature-container">
            <div className="feature-img">
              <img src={proc2} alt="img" />
            </div>
            <div className="feature-desc flex">
              <h3>Finally, handing over</h3>
              <p>
                Community partners verifies the quality of donated medicines and
                prescription, then delivers to patients who otherwise wouldn’t
                have access.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
export default Procedure
