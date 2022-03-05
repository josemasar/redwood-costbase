const features = [
  {
    name: 'Cut unnecesary costs',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    /* icon: '/public/features/computer.jpg', */
    src: '/features/cutcosts.jpg',
  },
  {
    name: 'Sign better contracts',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    /* icon: '/public/features/computer.jpg', */
    src: '/features/contract.jpg',
  },
  {
    name: 'Control the evolution',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    /* icon: '/public/features/computer.jpg', */
    src: '/features/evolution.jpg',
  },
  {
    name: 'Understand your opportunities',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    /* icon: '/public/features/computer.jpg', */
    src: '/features/graph.jpg',
  },
]

const Features = () => {
  return (
    <>
      <div className="py-12 bg-white">
        <div className="max-w-7xl min-h-full mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-48">
          <div className="text-center">
            <h2 className="text-3xl text-indigo-600 font-semibold tracking-wide uppercase">
              Costbase
            </h2>
            <p className="mt-2 text-5xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              A better way to improve profit
            </p>
            <p className="mt-8 max-w-6xl text-3xl text-gray-500 lg:mx-auto">
              The world´s smartest solution to lower costs in high complex
              assembled products
            </p>
          </div>
          <div className="mt-24">
            <dl className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-28 md:gap-y-20">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-left h-100 w-100 rounded-md">
                      <img
                        src={feature.src}
                        width="120"
                        height="120"
                        alt="..."
                      />
                    </div>
                    <p className="flex ml-60 text-3xl font-semibold text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="flex mt-10 ml-60 text-lg text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
