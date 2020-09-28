import React from 'react';
import Navigation from './global/navigation'
import Footer from './global/footer'

export default function DefaultLayout({children}) {
    return (
     <div>
        <Navigation />
        
        
        {children}

        <Footer />
        </div>
    )
}