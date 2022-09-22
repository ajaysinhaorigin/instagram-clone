import React, { useContext } from "react";
import { dataContext } from "../../App";
import "./Main.css";
import ajayprof from "../../profile-picture/ajay.png";
import avatarprof from "../../profile-picture/avatar.jpg";
import anneprof from "../../profile-picture/anne.jpg";
import jonathanprof from "../../profile-picture/jonathan.jpg";

function Main() {
  const [state, dispatch] = useContext(dataContext);
  return (
    <>
      {state.data.map((data) => {
        return (
          <React.Fragment key={data.id}>
            <div className="profile-component">
              <div className="profile">
                <div className="profile-header">
                  <div className="profile-picture">
                    <img src={data.profileImg} alt="error" />
                  </div>
                  <p className="userName">{data.userName}</p>
                </div>
                <div className="profile-dots">
                  <pre className="dots">...</pre>
                </div>
              </div>
              <div className="profile-post">
                <img src={data.image} alt="error" />
              </div>
              <div className="icons">
                <div className="side-icons">
                  <div className="like-icon icon ">
                    <img src={data.like} alt="error" />
                  </div>
                  <div className="comment-icon icon ">
                    <img src={data.comment} alt="error" />
                  </div>
                  <div className="share-icon icon ">
                    <img src={data.share} alt="error" />
                  </div>
                </div>
                <div className="save-icon icon ">
                  <img src={data.save} alt="error" />
                </div>
              </div>
              <div className="likes">
                <div className="post-like">
                  <div className="like avatar-like">
                    <img src={avatarprof} alt="error" />
                  </div>
                  <div className="like anne-like">
                    <img src={anneprof} alt="error" />
                  </div>
                  <div className="like jonathan-like">
                    <img src={jonathanprof} alt="error" />
                  </div>
                </div>
                <div className="post-like-by">
                  {data.userName !== "dua" ? (
                    <p>
                      Liked by <span className="ajay-like">dua</span> and{" "}
                      <span className="ajay-like">{data.likeby} others</span>
                    </p>
                  ) : (
                    <p>
                      Liked by{" "}
                      <span className="ajay-like">ajaysinhaorigin</span> and{" "}
                      <span className="ajay-like">{data.likeby} others</span>
                    </p>
                  )}
                </div>
              </div>
              <div className="about">
                <p><span className="username">{data.userName}</span> {data.about}</p>
              </div>
              <p className="comments">View all {data.comments} comments</p>
              <div className="add-comment">
                <div>
                  <img src={ajayprof} alt="error" />
                </div>
                <p>Add a comment...</p>
              </div>
              <p className="time">{data.hours} hours age</p>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default Main;
