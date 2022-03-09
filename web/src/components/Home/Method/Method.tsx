const Method = () => {
  return (
    <section id="method">
      <div className="container mx-auto max-w-7xl bg-white p-4 sm:p-6 lg:p-8">
        <div className="-mx-8 flex flex-wrap">
          <div className="w-full px-8 lg:w-1/2">
            <div className="mb-12 border-b pb-12 lg:mb-0 lg:border-b-0 lg:pb-0">
              <h2 className="font-heading mb-4 text-2xl font-medium lg:text-4xl ">
                Sed ac magna sit amet risus tristique interdum, at vel velit in
                hac habitasse platea dictumst.
              </h2>
              <p className="mb-8 leading-loose text-gray-500 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sagittis, quam nec venenatis lobortis, mi risus tempus nulla,
                sed porttitor est nibh at nulla. Praesent placerat enim ut ex
                tincidunt vehicula. Fusce sit amet dui tellus.
              </p>
              <div className="w-full md:w-1/3">
                <button
                  type="button"
                  className="w-full rounded-lg  bg-indigo-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
                >
                  See more
                </button>
              </div>
            </div>
          </div>
          <div className="w-full px-8 lg:w-1/2">
            <ul className="space-y-12">
              <li className="-mx-4 flex">
                <div className="px-4">
                  <span className="font-heading mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-2xl font-bold text-blue-600">
                    1
                  </span>
                </div>
                <div className="px-4">
                  <h3 className="my-4 text-xl font-semibold ">
                    Responsive Elements
                  </h3>
                  <p className="text-base leading-relaxed text-gray-500">
                    All elements are responsive and provide the best display in
                    all screen size.
                  </p>
                </div>
              </li>
              <li className="-mx-4 flex">
                <div className="px-4">
                  <span className="font-heading mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-2xl font-bold text-blue-600">
                    2
                  </span>
                </div>
                <div className="px-4">
                  <h3 className="my-4 text-xl font-semibold ">Flexible Team</h3>
                  <p className="text-base leading-relaxed text-gray-500">
                    Flexibility is the key. All team is available 24/24 and
                    joinable every day on our hotline.
                  </p>
                </div>
              </li>
              <li className="-mx-4 flex">
                <div className="px-4">
                  <span className="font-heading mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-2xl font-bold text-blue-600">
                    3
                  </span>
                </div>
                <div className="px-4">
                  <h3 className="my-4 text-xl font-semibold ">
                    Ecologic Software
                  </h3>
                  <p className="text-base leading-relaxed text-gray-500">
                    Our Software are ecologic and responsable. Green is not just
                    a color, its a way of life.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Method
