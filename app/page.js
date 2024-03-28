
import Head from 'next/head'; /// import head
import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin='anonymous' />
      <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap" rel="stylesheet"/>
    </Head>
    <main className="flex flex-col" >
      <Header />
      <Landing />
      <Footer />
    </main>
    </>
  );
}
