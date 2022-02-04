import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import HomePage from '../screens/home';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <HomePage />
  </div>
);

export default Home;
