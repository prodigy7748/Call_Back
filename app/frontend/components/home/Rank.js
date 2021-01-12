
import Card from './Card'
import React,{useState,useEffect} from 'react';
import './Rank.scss'



 const Rank = () => {
  const [imgs, setImgs]= useState([])
  const [projects, setProjects]= useState([])
  const [isLoading, setIsLoading]= useState(true)

   useEffect(() => {
    fetch('/apis/projects')
    .then(res => res.json())
    .then((data) =>{
      setProjects(data)
      console.log(data)
      setIsLoading(false)

     })
    .catch(err => console.log(err))
  },[])

  return (
    <div>

      <section className='ranking'>
        <div className="ranking-container ">
          <div className="ranking-row">
            <div className="ranking-txt flex">
              <h2 className="title">Fun夯商品</h2>
              <a href="/projects" className="more-btn">查看更多</a>
            </div>
            <div className="ranking-projects">
              {projects.slice(4, 10).map(project => (
                  <Card key={project.id} project={project}/>
              ))
              }        
            </div>
          </div>
        </div>
      </section>

       
       
       
      
    </div>
  )
}

export default Rank
