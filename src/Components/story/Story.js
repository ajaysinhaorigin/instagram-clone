import React, { useContext } from "react";
import { dataContext } from "../../App";
import data from "../data/data";
import "./Story.css";

function Story() {
  const [state, dispatch] = useContext(dataContext);

  return (
    <div className="stories">
      {state.data.map((story) => {
        return (
          <React.Fragment key={story.id}>
            <div className="story">
              <div className="story-img">
                <img src={story.profileImg} alt="error" />
              </div>
              {story.id == 1 ? <p>Your Story</p> : <p>{story.userName}</p>}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Story;
