import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Profile = () => {
  return (
    <>
      <Head>
        <title>내 프로필 | Node bird</title>
      </Head>
      <AppLayout>내 프로필</AppLayout>
    </>
  );
};

export default Profile;
