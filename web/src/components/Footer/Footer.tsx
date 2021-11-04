const Footer = () => {
  return (
    <div className="w-full bg-gray-100 text-black font-medium pt-20">
      <div className="xl:px-40 pb-12  lg:px-20 md:px-10 sm:px-5 px-10">
        <div className="w-full pt-10 flex flex-col sm:flex-row space-y-2 justify-start">
          <div className="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
            Logo
          </div>
          <div className="w-full sm:w-1/5 flex flex-col space-y-4">
            <a>About Us</a>
            <a>Method</a>
            <a>Our Services</a>
            <a>Contact</a>
          </div>
          <div className="w-full sm:w-1/5 flex flex-col space-y-4">
            <a>Disclaimer</a>
            <a>Success stories</a>
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
          </div>
          <div className="w-full sm:w-1/5 pt-6 flex items-end mb-1">
            <div className="flex flex-row space-x-4">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-google"></i>
            </div>
          </div>
        </div>
        <div className="pt-2">
          <p>© 2021 Costbase</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
