import Head from 'next/head';
import ArtForm from '../../components/art/ArtForm';
import { useAuth } from '../../utils/context/authContext';

const NewArt = () => {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>Upload Art</title>
      </Head>
      <div>
        <br />
        <div>
          <p className="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white">Upload New Art</p>
          <br />
        </div>
        <div>
          <ArtForm user={user} />
        </div>
      </div>
    </>
  );
};

export default NewArt;
