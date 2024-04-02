/// this page.js immediately inside app so this is with "/" with domain 

import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <main  className='flex flex-col gap-20 md:gap-10' >
      <Header />
      <Landing />
      <Newsletter />
      <Footer />
    </main>
  );
}
