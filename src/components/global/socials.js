import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab, fas, far)


class Socials extends React.Component {
    render() {
        return(
            <div className="wrapper mt-6 space-x-4">

                <a href="https://www.google.com"> <FontAwesomeIcon icon={['fas', 'file-pdf']} size='lg' /> </a>
                <FontAwesomeIcon icon={['fab', 'github']} size='lg' />
                <FontAwesomeIcon icon={['fab', 'linkedin']} size='lg' />
                <FontAwesomeIcon icon={['fab', 'dribbble']} size='lg' />
                <FontAwesomeIcon icon={['fab', 'instagram']} size='lg' />
                <FontAwesomeIcon icon={['fas', 'envelope']} size='lg' />
            </div>
        )
    }
}

export default Socials;