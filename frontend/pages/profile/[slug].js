import Profile from "../../components/publicUserProfile/publicUser";
import {
  listProfiles,
  userPublicProfile,
} from "../../actions/userProfile.action";

const Index = (profile) => {
  return <Profile profile={profile} />;
};

export async function getStaticPaths() {
  //done
  const profiles = await listProfiles().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  const paths = profiles.map((post) => ({
    params: { slug: post.username },
  }));

  return {
    paths,
    fallback: true, // See the "fallback" section below
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  //done
  const profile = await userPublicProfile(params.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });

  return {
    props: {
      profile,
    },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
}

export default Index;
