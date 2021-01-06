import React from 'react'

const Articles = ({ articles, handlePrevPage, handleNextPage, actualPage }) => {
    articles = articles.filter(article => article.title)

    return (
        <section className='grid place-items-center gap-4 mt-8'>
        <h3>Page : {actualPage + 1}</h3>
        <div className='flex items-center justify-center mb-2'>
            <button onClick={handlePrevPage} className='mr-2 bg-red-400 p-2 rounded-md text-xs shadow-md outline-none'>Previous page</button>
            <button onClick={handleNextPage} className='bg-green-400 p-2 rounded-md text-xs shadow-md outline-none'>Next page</button>
        </div>
        {
            articles ? (
                articles.map(({ author, points, num_comments, title, url, tags }) => {
                    return (
                        <div className='text-sm bg-gray-600 w-3/4 shadow-md rounded-md p-4'>
                            <h1 onClick={() => window.open(url)} className='text-blue-400 cursor-pointer'>{title}</h1>
                            <hr className='my-2'/>
                            <h3>By <span className='text-red-400'>{author}</span> | {num_comments} comments</h3>
                        </div>
                    )
                })
            ) : (
                <h1>no articles</h1>
            )
        }
        </section>
    );
};

export default Articles;