import { Homepage,Rooms, Services, About, Gallery, Contact } from './pages/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/rooms' element={<Rooms />} />
                <Route path='/services' element={<Services />} />
                <Route path='/about' element={<About />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/contact-us' element={<Contact />} />
            </Routes>
        </Router>
    )
}