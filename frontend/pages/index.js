import { gql } from '@apollo/client';
import ReactMarkdown from 'react-markdown';

import client from '@lib/apollo';
import withTransition from 'HOC/withTransition';

const Home = ({ homepage }, props) => {

  const HomeContent = () => (
    <main>
      <ReactMarkdown children={homepage.attributes.content} />
    </main>
  );

  const HomeWithTransition = withTransition(HomeContent);

  return (
    <HomeWithTransition {...props} />
  );
};

export async function getStaticProps() {
  const { data: homepageRes } = await client.query({
    query: gql`
      query getHomepage {
        homepage {
          data {
            attributes {
              content
            }
          }
        }
      }
    `
  });

  return {
    props: {
      homepage: homepageRes.homepage.data
    },
    revalidate: 1,
  }
};

export default Home;