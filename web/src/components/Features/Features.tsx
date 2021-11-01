const features = [
  {
    name: 'Cut unnecesary costs',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    /* icon: '/public/features/computer.jpg', */
    src: '/features/cutcosts.jpg',
  },
  {
    name: 'Sign better contracts',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    /* icon: '/public/features/computer.jpg', */
    src: '/features/contract.jpg',
  },
  {
    name: 'Control the evolution',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    /* icon: '/public/features/computer.jpg', */
    src: '/features/evolution.jpg',
  },
  {
    name: 'Understand your opportunities',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    /* icon: '/public/features/computer.jpg', */
    src: '/features/graph.jpg',
  },
]

const Features = () => {
  return (
    <>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Costbase
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to improve profit
            </p>
            <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
              The world´s smartest solution to lower costs in high complex
              assembled products
            </p>
          </div>
          <div className="mt-14">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-200 w-200 rounded-md bg-indigo-500 text-white">
                      <img
                        src={feature.src}
                        width="140"
                        height="140"
                        alt="..."
                      />
                    </div>
                    <p className="ml-40 text-lg font-semibold leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-40 text-base text-gray-500">
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
