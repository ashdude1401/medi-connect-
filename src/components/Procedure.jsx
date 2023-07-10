import '../styles/Procedure.css';

import proc1 from '../images/proc11.png';
import proc2 from '../images/proc1.png';
import proc3 from '../images/img1.png';

const Procedure = () => {
  return (
    <div id="procedure" className="bg-violet-500 text-white">
      <div className="procedure-container">
        <h1 className="text-5xl flex justify-center">Our Process</h1>
        {/* 1st procedure */}
        <section className="big-feature-section">
          <div className="container flex big-feature-container">
            <div className="feature-img">
              <img src={proc1} alt="img" />
            </div>
            <div className="feature-desc flex">
              <h3 className='text-5xl font-heading pb-5'>List your meds</h3>
              <p className='text-xl text-white '>
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
              <h3 className='text-5xl font-heading pb-5'>Collection of listed meds</h3>
              <p className='text-xl text-white'>
                Medi-Connect matches donated medicine to community partners who
                need it
              </p>
            </div>
          </div>
        </section>
        {/*  3rd procedure*/}
        <section className="big-feature-section">
          <div className="container flex big-feature-container ">
            <div className='-m-5'>
              <img style={{'height': '403px', 'width': '715px'}} src={proc2} alt="img" />
            </div>
            <div className="feature-desc flex p-10">
              <h3 className='text-5xl font-heading pb-5'>Finally, handing over</h3>
              <p className='text-xl text-white'>
                Community partners verifies the quality of donated medicines and
                prescription, then delivers to patients who otherwise wouldn't
                have access.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
export default Procedure;
