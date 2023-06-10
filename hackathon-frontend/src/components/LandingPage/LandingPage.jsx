import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our NGO</h1>
        <p className="text-lg text-gray-600">
          Making a difference in the world, one step at a time.
        </p>
      </header>
      <main className="mt-8">
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
            We are a non-profit organization dedicated to bringing positive
            change to our community.
          </p>
        </section>
        <section className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Apply Now</h2>
          <p className="text-lg text-gray-600">
            If you are passionate about making a difference, join us in our
            mission!
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
            Apply Now
          </button>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
