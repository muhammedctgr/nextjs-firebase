import Link from 'next/link'
import db from '../../utils/db';

const Posts = (props) => {
  const { entriesData } = props;

  return (
    <div>
      <h1>Posts</h1>
      return {
  props: {
    entriesData
  }
}
    </div>
  );
};

export const getStaticProps = async () => {
  const entries = await db.collection('entries').orderBy('created', 'desc').get();
  const entriesData = entries.docs.map(entry => ({
    id: entry.id,
    ...entry.data()
  }));
  return {
    props: { entriesData },
    revalidate: 10
  }
}

export default Posts;