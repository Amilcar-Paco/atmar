/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon4 from 'assets/images/icons/service4.png';
import icon5 from 'assets/images/icons/service5.png';
import icon6 from 'assets/images/icons/service6.png';
import icon7 from 'assets/images/icons/service7.png';
import icon8 from 'assets/images/icons/service8.png';
import icon9 from 'assets/images/icons/service9.png';

const data = [
  {
    id: 1,
    icon: icon4,
    moreLink: '#learn-more',
    title: 'Produção de Blocos',
    description: `Bloco 10cm e 15cm.`,
  },
  {
    id: 2,
    icon: icon5,
    moreLink: '#learn-more',
    title: 'Produção de Estribos',
    description: `Estribos 15cm a 20cm.`,
  },
  {
    id: 3,
    icon: icon6,
    moreLink: '#learn-more',
    title: 'Desenho de Plantas',
    description: `Desenho de plantas arquitetónicas.`,
  },
  {
    id: 4,
    icon: icon7,
    moreLink: '#learn-more',
    title: 'Montagem de Cameras CCTV/IP',
    description: `Vedação elétrica, montagem de Motor Elétrico de Portão.`,
  },
  {
    id: 5,
    icon: icon8,
    moreLink: '#learn-more',
    title: 'Produção de Portões e Fogões a Carvão',
    description: `Madeira, Chapas com ondas eportão de Chapa lisa .`,
  },
  {
    id: 6,
    icon: icon9,
    moreLink: '#learn-more',
    title: 'Venda de Material',
    description: `Construção Civil`,
  },
];

const OtherServices = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Outros serviços que você deve apreciar"
          description="Estamos em toda cadeia da Construção Civil"
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
export default OtherServices;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [9, 9, 9, 11],
    pb: [9, 9, 9, 12, 12, 14],
  },
  heading: {
    mb: [6, null, null, 8, 9, null, 13],
    p: {
      maxWidth: 500,
      margin: '10px auto 0',
    },
  },
  contentWrapper: {
    gap: ['30px 30px', '30px 30px', '30px 30px', '80px 30px'],
    display: 'grid',
    justifyContent: ['center', 'center', 'center', 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
