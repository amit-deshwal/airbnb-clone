import React from "react";

function Section() {
  return (
    <>
      <section className="mt-24">
        <div className="flex justify-start flex-col">
          <div>
            <h2 className="text-5xl font-medium">
              Inspiration for your next trip
            </h2>
          </div>
          <div>
            <div className="container my-12 ">
              <div className="flex flex-wrap -mx-1 lg:-mx-4">
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src="https://a0.muscache.com/im/pictures/68ef0c20-321d-42c0-beb4-13bce3e258a2.jpg"
                      />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-4 pb-28 bg-cyan-500 text-white">
                      <div>
                        <a
                          className="no-underline hover:underline text-4xl font-medium"
                          href="#"
                        >
                          Lonavla
                        </a>
                        <br />
                        <h3 className="text-lg mt-1">33 Kilometres away</h3>
                      </div>
                    </header>
                  </article>
                </div>

                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src="https://a0.muscache.com/im/pictures/64530077-ffc7-481b-8cca-50ec8c5f3324.jpg"
                      />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 pb-28 bg-red-600 text-white">
                      <div>
                        <a
                          className="no-underline hover:underline text-4xl font-medium"
                          href="#"
                        >
                          Pune
                        </a>
                        <br />
                        <h3 className="text-lg mt-1">33 Kilometres away</h3>
                      </div>
                    </header>
                  </article>
                </div>

                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src="https://a0.muscache.com/im/pictures/54582c41-77ef-4f41-aa88-6a4ed0068f4b.jpg"
                      />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 pb-28 bg-pink-600 text-white">
                      <div>
                        <a
                          className="no-underline hover:underline text-4xl font-medium"
                          href="#"
                        >
                          Khandala
                        </a>
                        <br />
                        <h3 className="text-lg mt-1">33 Kilometres away</h3>
                      </div>
                    </header>
                  </article>
                </div>

                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src="https://a0.muscache.com/im/pictures/68ef0c20-321d-42c0-beb4-13bce3e258a2.jpg"
                      />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 pb-28 bg-pink-700 text-white">
                      <div>
                        <a
                          className="no-underline hover:underline text-4xl font-medium"
                          href="#"
                        >
                          Pune
                        </a>
                        <br />
                        <h3 className="text-lg mt-1">33 Kilometres away</h3>
                      </div>
                    </header>
                  </article>
                </div>

                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src="https://a0.muscache.com/im/pictures/64530077-ffc7-481b-8cca-50ec8c5f3324.jpg"
                      />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 pb-28 bg-yellow-500 text-white">
                      <div>
                        <a
                          className="no-underline hover:underline text-4xl font-medium"
                          href="#"
                        >
                          Khandala
                        </a>
                        <br />
                        <h3 className="text-lg mt-1">33 Kilometres away</h3>
                      </div>
                    </header>
                  </article>
                </div>

                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src="https://a0.muscache.com/im/pictures/54582c41-77ef-4f41-aa88-6a4ed0068f4b.jpg"
                      />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 pb-28 bg-cyan-500 text-white">
                      <div>
                        <a
                          className="no-underline hover:underline text-4xl font-medium"
                          href="#"
                        >
                          Koregaon
                        </a>
                        <br />
                        <h3 className="text-lg mt-1">33 Kilometres away</h3>
                      </div>
                    </header>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
