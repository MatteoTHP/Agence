import React, {useContext} from 'react';
import {ThemeContext} from '../../Context/ThemeContext';
import './content.css'
import logo from'./entreprise.jpg'
const Home = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme ? 'minHeight content light' : 'minHeight content dark'}>
      <h1>Home</h1>
      <div className="image">
        <img src={logo} alt="Logo"></img>
      </div>
      <h2>Confiez vos rêves à des experts du Web</h2>
      <p>Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.  
Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.</p>
     
    </div>
    
  )

}


export default Home;



 