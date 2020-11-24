import SingleTag from "../../components/singleTag.component/singleTag";
import { getTags, singleTags } from "../../actions/tag.action";

const Index = (tag) => {
  return <SingleTag singleTag={tag} />;
};

export async function getStaticPaths() {
  const tags = await getTags().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  const paths = tags.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true, // See the "fallback" section below
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const tag = await singleTags(params.slug).then((data) => {
    if (data.error) {
      return console.log(data.error);
    } else {
      return data;
    }
  });

  return {
    props: {
      tag,
    },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
}

export default Index;
