import heroImg from '../assets/heroImg.jpeg'

const Home = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="text-white text-center bg-black/50 p-8 rounded">
        <h1 className="text-5xl font-bold mb-4">Explore the World</h1>
        <p className="text-lg">Start your adventure with DreamWorld Travel.</p>
      </div>npm run dev
    </section>
  )
}

export default Home