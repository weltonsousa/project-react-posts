import { useState, useEffect, useCallback } from 'react';

import './style.css';

import {Posts} from '../../components/Posts';
import { Button } from '../../components/Button';
import {loadPosts} from '../../utils/load-posts';
import {TextInput} from '../../components/TextInput';

export const Home = () => {

const [posts, setPosts] = useState([]);
const [allPosts, setAllPosts] = useState([]);
const [page, setPage] = useState(0);
const [postsPerPage] = useState(10);
const [searchValue, setSearchValue] = useState('');

const noMorePosts = page + postsPerPage >= allPosts.lenght;

const filteredPosts = !!searchValue ?
posts.filter(post => {
  return post.title.toLowerCase().includes(
    searchValue.toLocaleLowerCase()
  );
})
: posts;

const handleLoadPosts = useCallback(async (page, postsPerPage) => {
  const postsAndPhotos = await loadPosts();  

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, [])


useEffect(() => {
  console.log("OI");
  handleLoadPosts(0, postsPerPage);
}, [handleLoadPosts, postsPerPage]);

//paginacao 
const loadMorePosts = () =>{  
  const nextPage = page + postsPerPage;
  const nexPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
  posts.push(...nexPosts); 
  
  setPosts(posts);
  setPage(nextPage);
}

const handleChange = (e) => {
  const {value} = e.target;
  
  setSearchValue(value);
}

  return (
    <section className="container">
      <div className='search-container'>
      {!!searchValue && (
        <>
          <h1>Search Value: {searchValue}</h1>
        </>
      )}
      
        <TextInput searchValue={searchValue} handleChange={handleChange}/>
        </div>
        
        {filteredPosts.length > 0  &&(
           <Posts posts={filteredPosts} />
        )}
     
        {filteredPosts.length === 0 &&(
          <p>Não existe posts =( </p>
        )}

      <div className='button-container'>
       
        {!searchValue && (
        <Button 
        text="Load mores posts"             
        onClick={loadMorePosts}
        disabled={noMorePosts} 
        />   
        )}
      </div>       

    </section>        
  );
}

export default Home;

