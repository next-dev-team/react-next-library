export const Pricing3 = () => {
  return (
    <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
      <div className="relative w-full h-48">
        <img
          src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="object-cover w-full h-full rounded-t"
          alt="Plan"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
        <div>
          <div className="text-lg font-semibold">Basic</div>
          <p className="text-sm text-gray-900">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque.
          </p>
          <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">$12</div>
        </div>
        <a
          href="/"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
        >
          Buy Basic
        </a>
      </div>
    </div>
  );
};
