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
            <div className="feature-img feature-img-right justify-center mx-auto w-3/5">
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
            <div className="feature-desc flex items-center justify-center w-2/5">
              <div className="text-container px-4">
                <h3 className="font-extrabold text-5xl font-heading mb-2">Collection of listed meds</h3>
                <p className="font-normal text-xl p-5">
                  Our team collects the listed medicines and verifies their quality before matching them with community partners. India's health system is underfunded, inefficient, and underregulated. Your donation can help bridge the gap.
                </p>
              </div>
            </div>
            <div className="feature-img feature-img-left justify-center mx-auto w-3/5">
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
