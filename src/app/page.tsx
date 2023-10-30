import Section2 from './section2';
import Section3 from './section3';
import './stylesheet/section1.css';
import './stylesheet/section2.css';
import './stylesheet/section3.css';

export default function Home() {
  return (
    <body>
    <main>
      <section className="section">
        <div className="section1__content">
          <h1 className="section1__text">lorem ipsium lorem ipsiumlorem</h1>
          <h3 className="section1__text_subtitle">Desenvolvedor Front-End</h3>
          <p className="section1__text_desc">Analista de Sistemas com experiência na área de Desenvolvimento Web / Front-end.
            Trabalho há 2 anos
            desenvolvendo aplicações web para a área de crédito e investimentos utilizando ReactJS, HTML, CSS,
            JavaScript e React Native.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section2__content">
          <h3 className="section2__text-title">Sobre</h3>
          <p className="section2__text_desc">Back in 2012, I decided to try my hand at creating custom Tumblr themes and
            tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the
            privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge
            corporation.
  
            My main focus these days is building products and leading projects for our clients at Upstatement. In my free
            time I've also released an online video course that covers everything you need to know to build a web app with
            the Spotify API.
  
            When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running
            around Hyrule searching for Korok seeds
         
            .
          </p>
        </div>
      </section>
     <Section2 />
     <Section3 />
    </main>
  </body>
  )
}
