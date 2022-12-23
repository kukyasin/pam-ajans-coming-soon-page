import Head from 'next/head'
import Main from '../components/Main'


export default function Home() {
  return (
    <div className='absolute h-full w-full object-cover bg-[url("/assets/images/bg-main.png")]'>
      <Head>
        <title>Pushouse</title>
        <meta name="description" content="Pushouse" />
        <link rel="icon" href="https://bloodmoonbird.s3.eu-west-2.amazonaws.com/bmb-fav.png" />
      </Head>
      <Main />

    </div>
  )
}
