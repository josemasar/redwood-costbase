const Hero = () => {
  return (
    <>
      <div
        className="container mx-auto min-w-full min-h-full lg:min-h-screen flex flex-col justify-center
    bg-wave bg-no-repeat"
      >
        <div className="max-w-7xl mx-auto -mb-10 lg:-mt-56 justify-center">
          <img
            src="/static-files/costbase_logo.svg"
            className="object-top"
            alt="costbase logo"
            className="h-80"
          />
        </div>
        <div>
          <h1 className="max-w-7xl mx-auto mb-48 mt-6 lg:text-7xl text-5xl font-semibold text-white text-center align-middle">
            Control cost of industrial goods
          </h1>
        </div>
      </div>
    </>
  )
}

export default Hero
