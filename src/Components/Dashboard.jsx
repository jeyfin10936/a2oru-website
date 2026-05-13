// import DashboardImg from '../Assets/Main-Dashboard.jpg';
import dashBoardVideo from "../Assets/A2ORU_Video.mp4";

import "../CSS/Dashboard.css";

function Dashboard() {
    return(
        <section className="mainDashboardImg">
            <div className="container">
                {/* <img src={DashboardImg} alt="Dashboard" /> */}
                <video 
                    className='dashBoardVideo'
                    src={dashBoardVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            </div>
        </section>
    )
}

export default Dashboard;