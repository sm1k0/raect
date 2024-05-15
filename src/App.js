// App.js

import React from 'react';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Section from './components/Section';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';

import 'bootstrap/js/dist/modal';

import './styles.css';
import './script.js';
function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <Section id="bleach" title="Bleach">
        <p>Bleach is a Japanese manga series written and illustrated by Tite Kubo. It follows the adventures of Ichigo Kurosaki, a teenager with the ability to see ghosts, who becomes a Soul Reaper, dedicated to protecting the living world from malevolent spirits known as Hollows.</p>
        <div className="anime-images">
          <img src="https://i.pinimg.com/736x/b7/f0/b5/b7f0b5fe1a5c36876e80b026dfc28326--real-life-heroes.jpg" alt="Bleach Image 1" />
          <img src="https://dosbg3xlm0x1t.cloudfront.net/images/items/9784088701448/1200/9784088701448.jpg" alt="Bleach Image 2" />
          <img src="https://i.pinimg.com/originals/85/6e/dc/856edc8021bea88937e13ab238a758d4.jpg" alt="Bleach Image 3" />
        </div>
      </Section>
      <Section id="one-piece" title="One Piece">
        <p>One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It follows the journey of Monkey D. Luffy, a young pirate captain searching for the legendary treasure known as One Piece, in order to become the Pirate King.</p>
        <div className="anime-images">
          <img src="https://img.razrisyika.ru/kart/12/1200/46546-van-pis-29.jpg" alt="One Piece Image 1" />
          <img src="https://celes.club/uploads/posts/2022-05/1653663182_3-celes-club-p-anime-fon-korabl-krasivie-3.jpg" alt="One Piece Image 2" />
          <img src="https://mobimg.b-cdn.net/v3/fetch/cc/cc96eb2d8bd19c73ba167f481bb72d62.jpeg" alt="One Piece Image 3" />
        </div>
      </Section>
      <Section id="naruto" title="Naruto">
        <p>Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.</p>
        <div className="anime-images">
          <img src="https://img.goodfon.ru/original/1680x1050/d/59/naruto-naruto-itachi-noch-luna.jpg" alt="Naruto Image 1" />
          <img src="https://i.pinimg.com/originals/5b/54/7d/5b547ddbd1e40320aec310f1a6f635c8.jpg" alt="Naruto Image 2" />
          <img src="https://i.pinimg.com/originals/99/7b/79/997b79456039f38b37f90189bc5beb44.jpg" alt="Naruto Image 3" />
        </div>
      </Section>
      <Section id="magical-battle" title="Magical Battle">
        <p>Magical Battle is a fantasy anime series set in a world where wizards and magical creatures coexist. It follows the adventures of a group of young wizards as they train and battle against dark forces threatening their world.</p>
        <div className="anime-images">
          <img src="https://ustaliy.ru/wp-content/uploads/2021/10/kak-horosho-ty-znaesh-anime-magicheskaya-bitva-scaled.webp" alt="Magical Battle Image 1" />
          <img src="https://art.kartinkof.club/uploads/posts/2023-06/1686495575_art-kartinkof-club-p-godzho-satoro-art-62.jpg" alt="Magical Battle Image 2" />
          <img src="https://i.ytimg.com/vi/kCpDsIqQcU4/maxresdefault.jpg" alt="Magical Battle Image 3" />
        </div>
      </Section>
      <Footer />
    </div>
  );
}

export default App;
