import React from "react";

const NewsItem = (props) => {
  const { title, desc, imageUrl, newsUrl } = props;
  return (
    <>
      <div className="my-3">
        <div className="card">
          {imageUrl ? (
            <img src={imageUrl} className="card-img-top" alt="..." />
          ) : (
            <h1 className="text-center">No image</h1>
          )}

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
