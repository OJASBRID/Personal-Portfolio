import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relativ z-0 bg-primary'>
        <div className='xs:grid xs:grid-cols-[60px_1fr]'>
          <SideBar />
          <div>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            {/* <Tech /> */}
            <Works />
            {/* <Feedbacks />npm  */}
            <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
