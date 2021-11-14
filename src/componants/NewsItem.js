import React from 'react'


export default function NewsItem({title ,descreption,imgsrc,topageurl,author}) {
    return (
        <div>
            <div className="card pt-2 shadow-lg">
                <p className="authorTag pl-2">{author}</p>
                <img src={imgsrc} alt="" className="card-img-top shadow-lg" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{descreption} </p>
                    <button className="btn btn-primary">
                        <a href={topageurl}>Read More</a>
                    </button>
                </div>
            </div>
        </div>
    )
}
