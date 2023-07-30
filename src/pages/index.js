import Head from "next/head";
import RootLayout from "@/components/Layout/RootLayout";

const HomePage = ({allNews}) => {
  console.log(allNews , "this is news")
  return (
    <>
      <Head>
        <title>PC - Builder</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>welcome to next js</h1>
   
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getServerSideProps = async () => {
//   const res = await fetch("http://localhost:3000")
//   const data = await res.json()
//   return {
//     props : {
//       allNews : data
//     }
//   }
// }
