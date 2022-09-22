import React from "react";
import ajayprof from "../../profile-picture/ajay.png";
import jeanetteprof from "../../profile-picture/jeanette.jpg"
import kiraprof from '../../profile-picture/kira.jpg';
import sanaprof from "../../profile-picture/sana.jpg"
import "./Text.css"

function Text() {
    return (
        <>
            <div className="text">
                <div>
                    <div className="text-profile-img">
                        <img src={ajayprof} alt="error"/>
                    </div>
                    <div className="profile-text">
                        <p>ajaysinhaorigin</p>
                        <p>Ajay Sinha</p>
                    </div>
                </div>
                <p>switch</p>
            </div>
            <div className="suggestions">
                <p>Suggestions for you</p>
                <p>See All</p>
            </div>
            <div className="text">
                <div>
                    <div className="text-profile-img">
                        <img src={jeanetteprof} alt="error"/>
                    </div>
                    <div className="profile-text">
                        <p>jeanethe</p>
                        <p>New to instagram</p>
                    </div>
                </div>
                <p>Follow</p>
            </div>
             <div className="text">
                 <div>
                    <div className="text-profile-img">
                        <img src={kiraprof} alt="error"/>
                    </div>
                    <div className="profile-text">
                        <p>kira</p>
                        <p>New to instagram</p>
                    </div>
                </div>
                    <p>Follow</p>
             </div>
            <div className="text">
                <div>
                    <div className="text-profile-img">
                        <img src={sanaprof} alt="error"/>
                    </div>
                    <div className="profile-text">
                        <p>Sana</p>
                        <p>New to instagram</p>
                    </div>
                </div>
                <p>Follow</p>
            </div>
        </>
  )
}

export default Text;
