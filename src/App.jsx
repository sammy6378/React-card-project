
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from "./components/profilecard";

function App() {
  let data =[{
    name: 'Samuel Mwangi',
    image: 'https://i.pinimg.com/564x/43/d7/16/43d716925da061a194dc992feb4b34ed.jpg',
    age:20,
    bio: 'I am a software Engineer and I love coding.'
  },
{
  name: 'Emmanuel Juma',
  image: 'https://i.pinimg.com/564x/e5/ff/bc/e5ffbc6e4464d2ea688397b001c51c37.jpg',
  age:22,
  bio: 'I am a designer and I love coding #Teach2Give.'
},
{
  name: 'Ester Wambui',
  image: 'https://i.pinimg.com/564x/c4/be/bb/c4bebbf0c9b1e20f38b5107dd3af263f.jpg',
  age:18,
  bio: 'I love to have a family of children.'
},
{
  name: 'Ronny Otieno',
  image: 'https://i.pinimg.com/564x/b6/82/3a/b6823ad5dbd1061015ea6b9fdd9b955e.jpg',
  age:22,
  bio: 'I am a DEVops Engineer by profession.'
}]
 
  return(
    <>
    {data.map((profile, index) => (
        <Card key={index} data={profile} />
      ))}
    </>
  )
}

export default App
