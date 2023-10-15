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
                 LINEUP :
                </div>
                {/* <div
                className="content"
                style={{
                    fontFamily: "Dalek Pinpoint",
                    color: "#fcfcfc",
                    textAlign: "center",
                    fontSize: "2rem",
                    
                }}
                >
                    Points of sale :
                </div> */}
                <div className="contactinfo text-slate-200">
                <div className="contactinfo__item" style={{
                    textTransform: "uppercase",
                }} >
                    <div><span style={{color: "#ff7e03"}} >c</span>haotic <span style={{color: "#ff7e03"}} >h</span>armony</div>
                </div>
                <div className="contactinfo__item"style={{
                    textTransform: "uppercase",
                }}>
                    <div><span style={{color: "#ff7e03"}} >c</span>old <span style={{color: "#ff7e03"}} >s</span>eeps</div>
                </div>
                <div className="contactinfo__item" style={{
                    textTransform: "uppercase",
                }}>
                    <div><span style={{color: "#ff7e03"}} >w</span>hitefeel</div>
                </div>
                <div className="contactinfo__item"style={{
                    textTransform: "uppercase",
                }}>
                    <div><span style={{color: "#ff7e03"}} >s</span>miley'zz</div>
                </div>
                <div className="contactinfo__item"style={{
                    textTransform: "uppercase",
                }}>
                    <div><span style={{color: "#ff7e03"}} >n</span>ewram</div>
                </div>

                </div>
            </div>
            <Footer />
        </>
    )
        }