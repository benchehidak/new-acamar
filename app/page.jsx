'use client'
import Link from "next/link"
import UserHeader from "@/components/Header"
// import CountdownComponent from "@/components/Countdown"
import dynamic from 'next/dynamic';
import Footer from "@/components/Footer";
 
// const NoSSR = dynamic(() => import('../components/timer'), { ssr: false })

const Home = () => {


  return (
    <>
      <UserHeader />
      <div>
        <div
          className="content"
          style={{
            fontFamily: "Dalek Pinpoint",
            color: "#fcfcfc",
            textAlign: "center",
            fontSize: "2.5rem",

          }}
        >
          LINEUP :
        </div>
        <div className="contactinfo text-slate-200">
          <div className="contactinfo__item" style={{
            textTransform: "uppercase",
          }} >
            <div><span style={{ color: "#ff7e03" }} >c</span>haotic <span style={{ color: "#ff7e03" }} >h</span>armony</div>
          </div>
          <div className="contactinfo__item" style={{
            textTransform: "uppercase",
          }}>
            <div><span style={{ color: "#ff7e03" }} >c</span>old <span style={{ color: "#ff7e03" }} >s</span>eeps</div>
          </div>
          <div className="contactinfo__item" style={{
            textTransform: "uppercase",
          }}>
            <div><span style={{ color: "#ff7e03" }} >w</span>hitefeel</div>
          </div>
          <div className="contactinfo__item" style={{
            textTransform: "uppercase",
          }}>
            <div><span style={{ color: "#ff7e03" }} >s</span>miley'zz</div>
          </div>
          <div className="contactinfo__item" style={{
            textTransform: "uppercase",
          }}>
            <div><span style={{ color: "#ff7e03" }} >n</span>ewram</div>
          </div>
        </div>
      </div>
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
      <Footer />
    </>
  );
}
export default Home