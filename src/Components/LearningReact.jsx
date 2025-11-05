import './LearningReact.css';

export default function LearningReact() {
  return (
    <section id="learn">
      <div className='learningContent'>
        <div className='learningHeader'>
          <h2>Learning React Through Color</h2>
          <p>Project based approach to mastering <span style={{color: '#5DD4F2', fontSize: '1.5em'}}>⚛ React</span> concepts.</p>
        </div>

        <div id='learningGrid'>
          {[
            { title: "State Management", description: "Master hooks like useState and useEffect" },
            { title: "Prop Drilling", description: "Passing data around different components." },
            { title: "Controlled Inputs", description: "Managing input values through state." },
            { title: "Component Design", description: "Build reusable, composable components" },
            { title: "User Experience", description: "Create intuitive developer tools" },
            { title: "Real-time Updates", description: "Learn responsive UI patterns" },
          ].map((item, i) => (
            <div key={i} className='learningCard'>
              <div className='learningNumber'>{i + 1}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
