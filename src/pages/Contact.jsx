const Contact = () => {
    return (
      <section className="p-8 max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded" />
          <textarea placeholder="Your Message" className="w-full px-4 py-2 border rounded h-32" />
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send</button>
        </form>
      </section>
    )
  }
  
  export default Contact