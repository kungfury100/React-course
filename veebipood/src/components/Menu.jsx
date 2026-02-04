import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import english from "../assets/en.png";
import estonian from "../assets/et.png";


function Menu() {

  const { t, i18n } = useTranslation();
  
  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage)
  }

  return (
    <div>
      
        <Link to="/">
            <img className="pilt" src="https://www.green.earth/hs-fs/hubfs/Nature-based%20markets%20valued%20at%20$7%20trillion.jpg?width=683&height=420&name=Nature-based%20markets%20valued%20at%20$7%20trillion.jpg" alt="" />
        </Link>
        <Link to="/osta-kinkekaart">
            <button>{t('menu.giftcards')}</button>
        </Link>
        <Link to="/lisa">
            <button>{t('menu.add')}</button>
        </Link>
        <Link to="/ostukorv">
            <button>{t('menu.cart')}</button>
        </Link>
        <Link to="/seaded">
            <button>{t('menu.settings')}</button>
        </Link>
        <Link to="/kalkulaator">
            <button>{t('menu.calculator')}</button>
        </Link>

        <Link to="/arrays">
            <button>{t('menu.arrays')}</button>
        </Link>

        <Link to="/halda">
            <button>{t('menu.manage')}</button>
        </Link>

        <Link to="/meist">
            <button>{t('menu.about')}</button>
        </Link>

        {/* <button onClick={() => handleLanguageChange("en")}>English</button>
        <button onClick={() => handleLanguageChange("et")}>Eesti</button> */}

        <img className="icon" onClick={() => handleLanguageChange("en")} src={english} alt="" />
        <img className="icon" onClick={() => handleLanguageChange("et")} src={estonian} alt="" /> 
    </div>
  )
}

export default Menu