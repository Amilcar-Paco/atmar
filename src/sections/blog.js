/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import BlogPost from 'components/cards/blog-post';
import thumb1 from 'assets/images/blog/1.jpg';
import thumb2 from 'assets/images/blog/2.jpg';
import thumb3 from 'assets/images/blog/3.jpg';
import thumb4 from 'assets/images/blog/4.jpg';

const data = [
  {
    id: 1,
    slug: '#how-to',
    thumbnail: thumb1,
    showDescription: true,
    title: `Como fazer betão e argamassa para a sua obra de forma simples`,
    description: `Realizar uma laje em betão armado, as fundações de um muro de vedação, uma escada em alvenaria requer uma grande quantidade de betão.`,
  },
  {
    id: 2,
    slug: '#how-to',
    thumbnail: null,
    showDescription: false,
    title: `Selecionando um câmera de vigilância, segurança: CCTV ou câmera IP`,
    description: `The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design`,
  },
  {
    id: 3,
    slug: '#how-to',
    thumbnail: thumb3,
    showDescription: false,
    title: `Veja como nós preparamos o nosso betão`,
    description: `The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design`,
  },
  {
    id: 4,
    slug: '#how-to',
    thumbnail: thumb2,
    showDescription: true,
    title: `Quer abrir um estaleiro? Temos a lista do passo à passo`,
    description: `Abrir um estabeiro nunca foi tão fácil, mas nós desenhamos um processo que vai te ajudar a iniciar do zero ao pro.`,
  },
  {
    id: 5,
    slug: '#how-to',
    thumbnail: thumb4,
    showDescription: false,
    title: `Aprenda a fazer blocos que não se quebram no seu estaleiro`,
    description: `The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design`,
  },
];

const masonryOptions = { originTop: true };

const Blog = () => {
  return (
    <Box as="section" id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Publicações populares que actualizamos todos os dias"
          description="Tudo o que você precisa saber sobre Construção Civil."
        />
        <Masonry options={masonryOptions} sx={styles.postContainer}>
          {data?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [8, null, null, 9, null, 11],
    pb: [8, null, null, 9, null, 11],
    position: 'relative',
  },
  heading: {
    mb: [6, 6, 7, 11],
  },
};
