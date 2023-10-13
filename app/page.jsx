'use client'
import Link from "next/link"
import UserHeader from "@/components/Header"
// import CountdownComponent from "@/components/Countdown"
import dynamic from 'next/dynamic';
import Footer from "@/components/Footer";
 
const NoSSR = dynamic(() => import('../components/timer'), { ssr: false })

const Home = () => {


  return (
    <>
      <UserHeader />
      <div className="bgimage">
        <div
          className="content"
          style={{
            fontFamily: "Dalek Pinpoint",
            color: "#fcfcfc",
            textAlign: "center",
          }}
        >
          BLIND RELEASE EXPIRES IN :
        </div>
        <NoSSR />
        <div className="flex items-center justify-center">
          <Link
            href="/buy"
            className="bookbtn inline-flex items-center justify-center w-full px-4 py-2 mt-4 text-base font-medium text-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 "
          >
            Buy Your Ticket
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home