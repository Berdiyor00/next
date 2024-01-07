import Image from 'next/image';
import '../../public/style/main.css';
import Logo from '../../public/icon/Logo.svg';
import { BiMenuAltRight } from "react-icons/bi";
import Bar from '../../public/img/bar.svg'
import Moxito from '../../public/img/Moxito.png'
import Album from '@/Components/Albums';

export default function Home() {

  
  return (
    <div>
      <header>
        <nav>
          <div className="container">
            <div className="Bar__wrapper">
              <Image src={Logo} alt="Logo" priority={true} />
<BiMenuAltRight className='menubar'/>
            </div>
            <div className="text__wrapp">
<p className='text__wrapp__item'>Indulge in</p>
<p className='text__wrapp__title'>Liquid Artistry</p>
<p className='text__wrapp__title__item'>
Step into a world of extraordinary flavors and unrivaled mixology expertise
</p>
<div className="button">
            <button className='hello'>EXPLORE </button>
</div>
<div className="spoon">
    <Image src={Bar } alt='img' priority={true}/>
</div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="container">

        <section className='sectionWrapp'>
            <div className="section_img">
            <Image src={Moxito} alt='img' priority={true}/>
            </div>
            <p className='Sectiontitle'>Liquid Maestro, the newest hotspot in downtown Los Angeles. Our skilled mixologists are passionate about crafting exceptional cocktails that will delight your senses.</p>
            <p className='text__Section__item'> 
            With an ambiance that exudes elegance and a commitment to delivering unforgettable experiences, Liquid Maestro is the ultimate destination for cocktail enthusiasts. Join us for an exquisite journey into the world of liquid artistry.
            </p>
        </section>
        </div>
      </main>
      <main>
        <section className='albums'>
          <div className="container">

            <Album/>

           <h2>Opening Hours</h2>
           <p></p>
          </div>
        </section>
      </main>
    </div>
  );
}
