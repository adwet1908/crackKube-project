import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';
import Card2 from './components/Card2';
import './index.css';

function App() {
  const customStyle = {
    color: 'white',
    backgroundColor: '#1D1F25',
    borderRadius: '23px',
    fontWeight: '60',
    padding: '10px',
    float: 'left',
    marginLeft: '40px',
    marginTop: '15px', 
    width: '120px'
  };

  const cardContents = [
    {
      id: '1',
      image: 'https://media.istockphoto.com/id/1194440238/photo/times-to-working-in-the-morning-mobile-business-lifestyle-work-with-laptop-computer-outdoor.webp?b=1&s=170667a&w=0&k=20&c=VFsjCfywjx_mzyNJIWQ-GukwRABLO4td6V6pEFS4ulI=',
      alt: 'Image for course of time management',
      title: 'Time management for everyone',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      button: 'Read More', 
      type: 'S E L F  H E L P'
    },
    {
      id: '2',
      image: 'https://media.istockphoto.com/id/636332456/photo/online-education-concept.webp?b=1&s=170667a&w=0&k=20&c=t-cEbf4E2bR4hSzwa8T0GOvywSNCaX-Hq1iQbjQo1UE=',
      alt: 'maths image',
      title: 'Calculus for beginners',
      text: 'This course in calculus is for all who wish to master it',
      button: 'Read More', 
      type: 'M A T H S'
    },
    {
      id: '3',
      image: 'https://media.istockphoto.com/id/1282118468/photo/business-concept-with-turkish-lira.webp?b=1&s=170667a&w=0&k=20&c=e3g7P7lroPBCbiCXVCQbJY7j0wNqEB27uc7hliGhusU=',
      alt: 'Image of the course',
      title: 'Finance for beginners in business',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      button: 'Read More', 
      type: 'F I N A N C E'
    },
    {
      id: '4',
      image: 'https://media.istockphoto.com/id/520438705/photo/creativity-takes-courage.webp?b=1&s=170667a&w=0&k=20&c=wHV-NGVaPvcg41C6r35ohshw4_JQoDeyh5IV9AqSRHI=',
      alt: 'Image for the course',
      title: 'Basics of art and color',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      button: 'Read More', 
      type: 'T H E R A P Y'
    }
  ];

  return (
    <div className="App">
      <div className="navigation">
        <Header />
        <Categories style={customStyle} />
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <Card2
                type={cardContents[0].type}
                title={cardContents[0].title}
                text={cardContents[0].text}
                image={cardContents[0].image}
                alt={cardContents[0].alt}
                button={cardContents[0].button}
                key={cardContents[0].id}
              />
            </div>
            <div className="col">
              <Card2
                type={cardContents[1].type}
                title={cardContents[1].title}
                text={cardContents[1].text}
                image={cardContents[1].image}
                alt={cardContents[1].alt}
                button={cardContents[1].button}
                key={cardContents[1].id}
              />
            </div>
            <div className="col">
              <Card2
                type={cardContents[2].type}
                title={cardContents[2].title}
                text={cardContents[2].text}
                image={cardContents[2].image}
                alt={cardContents[2].alt}
                button={cardContents[2].button}
                key={cardContents[2].id}
              />
            </div>
            <div className="col">
              <Card2
                type={cardContents[3].type}
                title={cardContents[3].title}
                text={cardContents[3].text}
                image={cardContents[3].image}
                alt={cardContents[3].alt}
                button={cardContents[3].button}
                key={cardContents[3].id}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Card2
                type={cardContents[0].type}
                title={cardContents[0].title}
                text={cardContents[0].text}
                image={cardContents[0].image}
                alt={cardContents[0].alt}
                button={cardContents[0].button}
                key={cardContents[0].id}
              />
            </div>
            <div className="col">
              <Card2
                type={cardContents[1].type}
                title={cardContents[1].title}
                text={cardContents[1].text}
                image={cardContents[1].image}
                alt={cardContents[1].alt}
                button={cardContents[1].button}
                key={cardContents[1].id}
              />
            </div>
            <div className="col">
              <Card2
                type={cardContents[2].type}
                title={cardContents[2].title}
                text={cardContents[2].text}
                image={cardContents[2].image}
                alt={cardContents[2].alt}
                button={cardContents[2].button}
                key={cardContents[2].id}
              />
            </div>
            <div className="col">
              <Card2
                type={cardContents[3].type}
                title={cardContents[3].title}
                text={cardContents[3].text}
                image={cardContents[3].image}
                alt={cardContents[3].alt}
                button={cardContents[3].button}
                key={cardContents[3].id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
