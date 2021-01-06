import { useEffect, useState } from 'react'
import Articles from './components/Articles'
import Header from './components/Header'
import SearchBox from './components/SearchBox'

const App = () => {
  const [searchContent, setSearchContent] = useState('react')
  const [actualPage, setActualPage] = useState(0)
  const [totalPage, setTotalPage] = useState(0)
  const [articles, setArticles] = useState([])
  const [firstLoad, setFirstLoad] = useState(true)


  const handleChange = e => {
    setSearchContent(e.target.value)
    searchForArticles(e.target.value, actualPage)
  }

  const handleNextPage = () => {
    if (actualPage < totalPage) {
      setActualPage(actualPage + 1)
      searchForArticles(searchContent, actualPage + 1)
    } 
  }

  const handlePrevPage = () => {
    if (actualPage > 0) {
      setActualPage(actualPage - 1)
      searchForArticles(searchContent, actualPage - 1)
    }
  }
 
  const searchForArticles = async (query, page) => {
    const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}&page=${page}`)
    const data = await res.json()
    setArticles(data.hits)
    setTotalPage(data.nbPages)
  }

  useEffect(() => {
    if (firstLoad) {
      searchForArticles(searchContent, actualPage)
      setFirstLoad(false)
    }
  })

  return (
    <main className='font-mono bg-gray-700 min-h-screen text-white'>
      <Header />
      <SearchBox searchContent={searchContent} handleChange={handleChange}/>
      <Articles actualPage={actualPage} articles={articles} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage}/>
      <div className='h-4'></div>
    </main>
  );
}

export default App;
