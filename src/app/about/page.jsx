"use client"
import {useContext} from 'react'
import AboutSection from './AboutSection'
import { LangContext } from '../../store/context/LangContext'

const About = () => {
  const {language, changeLang} = useContext(LangContext)
  const sections = 
  [
    {
      headerEn: 'Our Mission',
      en: 'At RaCrops, our mission is to deliver dehydrated food products that meet the highest standards of quality and safety. We are committed to sustainability and innovation, continuously improving our processes to reduce environmental impact while enhancing the quality of our offerings. Our mission is not just to sustain but to grow, nurturing a healthier and more sustainable future for our planet and the people on it.',
      headerDut: 'Onze Missie',
      dut: 'Bij Racrops is het onze missie om gedehydrateerde (ZONGEDROOGDE) voedingsproducten te leveren die voldoen aan de hoogste normen op het gebied van kwaliteit en veiligheid. We zetten ons in voor duurzaamheid en innovatie, waarbij we onze processen voortdurend verbeteren om de impact op het milieu te verminderen en tegelijkertijd de kwaliteit van ons aanbod te verbeteren. Onze missie is niet alleen om te ondersteunen, maar ook om te groeien en een gezondere en duurzamere toekomst voor onze planeet en de mensen daarop te koesteren.'
    },
    {
      headerEn: 'Services and Products',
      en: 'RaCrops offers a wide range of dehydrated products, including fruits, vegetables, herbs, and spices. Our state-of-the-art facilities are equipped with the latest technology to ensure that each product is dehydrated to perfection. We cater to various industries including food processing, retail, and hospitality, providing customized solutions to meet the specific needs of our clients.',
      headerDut: 'Diensten en Producten',
      dut: 'Racrops biedt een breed scala aan gedroogde producten, waaronder fruit, groenten, kruiden en specerijen. Onze ultramoderne faciliteiten zijn uitgerust met de nieuwste technologie om ervoor te zorgen dat elk product tot in de perfectie wordt gedroogd. We bedienen verschillende industrieën, waaronder de voedselverwerking, detailhandel en horeca, en bieden op maat gemaakte oplossingen om aan de specifieke behoeften van onze klanten te voldoen.'
    },
    {
      headerEn: 'Quality Assurance',
      en: 'Quality is at the heart of everything we do at RaCrops. Our stringent quality control measures ensure that every product meets international standards. From the selection of raw materials to the final packaging, every step is meticulously monitored to guarantee that our customers receive nothing but the best.',
      headerDut: 'Kwaliteitsverzekering',
      dut: 'Kwaliteit staat centraal bij alles wat we doen bij Racrops. Onze strenge kwaliteitscontrolemaatregelen zorgen ervoor dat elk product aan de internationale normen voldoet. Vanaf de selectie van de grondstoffen tot de uiteindelijke verpakking, elke stap wordt nauwgezet gecontroleerd om te garanderen dat onze klanten alleen het allerbeste krijgen.'
    },
    {
      headerEn: 'Sustainability',
      en: 'We take our responsibility towards the environment seriously. RaCrops employs eco-friendly practices throughout the production process. We strive to minimize waste, use renewable energy sources, and support local farming communities. Our goal is to create a sustainable business model that benefits both the environment and society.',
      headerDut: 'Duurzaamheid',
      dut: 'Wij nemen onze verantwoordelijkheid ten opzichte van het milieu serieus. Racrops hanteert milieuvriendelijke praktijken tijdens het hele productieproces. We streven ernaar om afval te minimaliseren, hernieuwbare energiebronnen te gebruiken en lokale boerengemeenschappen te ondersteunen. Ons doel is om een duurzaam bedrijfsmodel te creëren dat zowel het milieu als de samenleving ten goede komt.'
    },
    {
      headerEn: 'Innovation',
      en: 'Innovation drives us forward. RaCrops invests heavily in research and development to improve our dehydration techniques and introduce new products to the market. Our dedicated team of experts is constantly exploring new ways to enhance the quality, taste, and nutritional value of our products.',
      headerDut : 'Innovatie',
      dut: 'Innovatie drijft ons vooruit. Racrops investeert zwaar in onderzoek en ontwikkeling om onze droogtechnieken te verbeteren en nieuwe producten op de markt te introduceren. Ons toegewijde team van experts onderzoekt voortdurend nieuwe manieren om de kwaliteit, smaak en voedingswaarde van onze producten te verbeteren.'
    },
    {
      headerEn: 'Partnership and Collaboration',
      en: 'We believe in building strong relationships with our partners and clients. RaCrops works closely with farmers, suppliers, and customers to ensure a seamless supply chain. Our collaborative approach ensures mutual growth and success.',
      headerDut: 'Partnerschap en samenwerking',
      dut: 'Wij geloven in het opbouwen van sterke relaties met onze partners en klanten. Racrops werkt nauw samen met boeren, leveranciers en klanten om een naadloze toeleveringsketen te garanderen. Onze gezamenlijke aanpak zorgt voor wederzijdse groei en succes.'
    },
    {
      headerEn: 'Why Choose RaCrops?',
      en: 'Quality Assurance: We adhere to the highest standards of quality control, ensuring that every batch meets stringent specifications for moisture content, purity, and consistency.'+ "\n" +
      'Sustainability: Our processes are designed with sustainability in mind. We strive to reduce energy consumption and minimize our environmental footprint through innovative techniques and responsible practices.',
      headerDut: 'Waarom kiezen voor Racrops?',
      dut: 'Kwaliteitsborging: We houden ons aan de hoogste normen voor kwaliteitscontrole en zorgen ervoor dat elke batch voldoet aan strenge specificaties voor vochtgehalte, zuiverheid en consistentie. Duurzaamheid: Onze processen zijn ontworpen met duurzaamheid in gedachten. We streven ernaar het energieverbruik te verminderen en onze ecologische voetafdruk te minimaliseren door middel van innovatieve technieken en verantwoorde praktijken.'
    }
  ]
  return (
    <div>
      <h1 className='text-center px-24 w-full font-extrabold md:text-6xl text-3xl mb-16 md:mt-36 mt-20 text-[#d0372a]'>{language == "en" ? "About us" : "Over Ons"}</h1>
      {sections.map(({headerEn, headerDut, en, dut}) =>  <AboutSection key={headerEn} header={'--' + (language == "en" ? headerEn : headerDut) + '--'} paragraph={(language == "en" ? en : dut)}/>)}
    </div>
  )
}

export default About