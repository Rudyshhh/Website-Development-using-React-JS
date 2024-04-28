import {useState} from 'react';
import BlogList from './BlogList'

const Home = () => {
    const [blogs,setBlogs]=useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);
    // let name='mario';
    // const[name,setName] =useState('mario');
    // const[age,setAge]=useState(25);
    // const handleClick=() => {
    //     setName('luigi');
    //     setAge(30);
    // }
    // const handleClickAgain=(name,e)=>{
        // console.log('helloe' +name,e.target);
    // }
    return (  
        <div className="Home">
            {/* <h2>Homepage</h2> */}
            {/* <p>{ name }</p>
            <p> {name} is {age} years old  </p>
            <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={(e)=>handleClickAgain("mario",e )}>Click me again</button> */}
            {/* {blogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>

            ))} */}
            <BlogList blogs={blogs} title="All Blogs!" ></BlogList>
            <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's Blogs" ></BlogList>
        </div>
    );
}
 
export default Home;