import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'


export default function Home({ /*exploreData, cardsData*/ }) {

  let exploreData = [{"img":"https://links.papareact.com/5j2","location":"London","distance":"45-minute drive"},{"img":"https://links.papareact.com/1to","location":"Manchester","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/40m","location":"Liverpool","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/msp","location":"York","distance":"4-hour drive"},{"img":"https://links.papareact.com/2k3","location":"Cardiff","distance":"45-minute drive"},{"img":"https://links.papareact.com/ynx","location":"Birkenhead","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/kji","location":"Newquay","distance":"6-hour drive"},{"img":"https://links.papareact.com/41m","location":"Hove","distance":"2-hour drive"}]

  let cardsData = [{"img":"https://links.papareact.com/2io","title":"Outdoor getaways"},{"img":"https://links.papareact.com/q7j","title":"Unique stays"},{"img":"https://links.papareact.com/s03","title":"Entire homes"},{"img":"https://links.papareact.com/8ix","title":"Pet allowed"}]


  return (
    <div className="bg-white text-gray-800">
      <Head>
        <title>AirBNB</title>
        <meta name="AirBnB" content="Created ob Next.JS by S.Lebedev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map((item, index) => (
                <SmallCard key={index} img={item.img} distance={item.distance} location={item.location} />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-6'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3'>
            {cardsData?.map((item, index) => (
              <MediumCard 
                key={index}
                img={item.img}
                title={item.title}
              />
            ))}
          </div>
        </section>

        <LargeCard 
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="WishLists curated by AirBnb"
          buttonText="Get Inspired"
        />

      </main>

      <Footer />
    </div>
  )
}

// export async function getStaticProps() {
//   const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json());

//   const cardsData = await fetch('https://links.papareact.com/zp1').then((res) => res.json());
//   return {
//     props: {
//       exploreData,
//       cardsData,
//     }
//   }
// };