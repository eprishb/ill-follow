import React from "react";

function ImagePost({ postImage }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="user-post">
      {postImage.length === 1 && (
        <img
          src={PF + postImage[0]}
          alt="Photo"
          className="img-fluid rounded w-100"
        />
      )}
      {postImage.length === 2 && (
        <div className="d-grid grid-cols-2 grid-flow-col gap-3">
          <div className="col-span-1">
            <img
              src={PF + postImage[0]}
              alt="Photo"
              className="img-fluid rounded w-100"
            />
          </div>
          <div className="col-span-1">
            <img
              src={PF + postImage[1]}
              alt="Photo"
              className="img-fluid rounded w-100"
            />
          </div>
        </div>
      )}
      {postImage.length > 2 && (
        <div className="d-grid grid-rows-2 grid-flow-col gap-3">
          <div className="row-span-2 row-span-md-1">
            <img
              src={PF + postImage[0]}
              alt="Photo"
              className="img-fluid rounded w-100"
            />
          </div>
          <div className="row-span-1">
            <img
              src={PF + postImage[1]}
              alt="Photo"
              className="img-fluid rounded w-100"
            />
          </div>
          <div className="row-span-1">
            <img
              src={PF + postImage[2]}
              alt="Photo"
              className="img-fluid rounded w-100"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImagePost;
