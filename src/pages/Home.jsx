import heroImg from '../assets/heroImg.jpeg'

const Home = () => {
  return (
    <section
      className="min-h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="text-white text-center bg-black/15 p-8 w-full min-h-screen rounded">
        <h1 className="text-5xl font-bold mb-4">Explore the World</h1>
        <p className="text-lg">Start your adventure with Hello.Travelvibesonly.</p>
      </div>
    </section>
  )
}

export default Home