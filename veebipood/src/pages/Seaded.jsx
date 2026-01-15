import { useState } from "react";


function Seaded() {
  const [language, setLanguage] = useState('et');
  return (
    <div>
        <button className={language === "et" ? "language-active" : undefined} onClick={() => setLanguage('et')}>Eesti</button>
        <button className={language === "en" ? "language-active" : undefined} onClick={() => setLanguage('en')}>English</button>
        <button className={language === "sp" ? "language-active" : undefined} onClick={() => setLanguage('sp')}>Spanish</button>
        <button className={language === "de" ? "language-active" : undefined} onClick={() => setLanguage('de')}>Deutsch</button>

        <div>Hetkel aktiivne keel: {language}</div>

        {language === 'et' && <div>Leht on eesti keelne</div>}
        {language === 'en' && <div>Page is in english</div>}
        {language === 'sp' && <div>La pagina esta en espanol</div>}
        {language === 'de' && <div>.... Deutsch</div>}
        {language !== 'et' && <div>Other translations than Estonian are not ready yet</div>}
        
    </div>
  )
}

export default Seaded