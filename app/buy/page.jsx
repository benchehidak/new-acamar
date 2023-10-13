import UserHeader from "@/components/Header";
import Footer from "@/components/Footer";
export default function BuyPage() {
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
                BLIND RELEASE 
                </div>
                <div
                className="content"
                style={{
                    fontFamily: "Dalek Pinpoint",
                    color: "#fcfcfc",
                    textAlign: "center",
                    fontSize: "2rem",
                    
                }}
                >
                    Points of sale :
                </div>
                <div className="contactinfo text-slate-200">
                <div className="contactinfo__item">
                    <div>TUNIS - MENZAH 5 90 165 240</div>
                </div>
                <div className="contactinfo__item">
                    <div>SOUSSE - KHEZEMA 99 050 118</div>
                </div>
                <div className="contactinfo__item">
                    <div>SOUSSE - SAHLOUL 93 158 643</div>
                </div>
                <div className="contactinfo__item">
                    <div>SOUSSE VILLE 25 051 727</div>
                </div>

                </div>
            </div>
            <Footer />
        </>
    )
        }