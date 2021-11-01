const NavBar = () => {
  return (
    <>
      <div className="container mx-auto min-w-full h-20 bg-gray-800 opacity-95">
        <div className="flex flex-row">
          <div className="container p-4 flex justify-start ">
            <p className="ml-20 text-4xl font-bold text-white">Logo</p>
          </div>
          <div className="container flex justify-end">
            <button className="btn-blue mr-8">Log in</button>
            <button className="btn-blue">Register</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
