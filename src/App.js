import React,{useState} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import LanguageHeader from './components/LanguageHeader';
import CopyrightInfo from './components/copyright';
import Profile from './components/Profile/Profile';
import AboutTemple from './components/AboutTemple/AboutTemple';
import KaalSarp from './components/KaalSarp/KaalSarp';
import MangalBhat from './components/MangalBhat/MangalBhat';
const App = () => {
    const [currentPage, setCurrentPage] = useState('Home');
    const onPageChange = (page) => {
        setCurrentPage(page);
    }
    return (
        <div>
            <LanguageHeader />
            <Header onPageChange={onPageChange}/>
            {currentPage==='Home' && <Home />}
            {currentPage==='AboutTemple' && <AboutTemple />}
            {currentPage==='Profile' && <Profile />}
            {currentPage==='KaalSarp' && <KaalSarp />}
            {currentPage==='MangalBhat' && <MangalBhat />}
            <Footer />
            <CopyrightInfo/>
        </div>
    );
};
export default App;