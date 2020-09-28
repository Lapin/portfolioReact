import React from 'react'


class Navigation extends React.Component {
    render() {
        return (
          <div className="">
            <div className="wrapper py-6 space-x-12 flex">
              <div>

                <div className="font-bold">Korhan</div>
    
              </div>
              <div className="">
                <ul className='flex space-x-2'>
                  <li>Works</li>
                  <li>Projects</li>
                  <li>Resume</li>
                </ul>
              </div>
            </div>
          </div>
        );
    }
}


export default Navigation;