import React from 'react';

const FirstPage = () => {
  return (
    <div className="bg-amber-50 min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <header className="text-center">
        <h1 className="text-7xl font-bold mb-4">MARPU</h1>
        <br />
        <p className="text-lg italic">
          "MARPU" - means "the change" and is Founded by National Youth Awardee Mr. Kadiri Raghu Vamsi.
          <br></br>
          At Marpu Foundation, we believe that every person has the power to make a positive impact on the world.
        </p>
      </header>
      <main className="mt-8">
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 py-8">Simple Steps to join our Fund-Raising Internship</h2>
          <div className="flex justify-center">
            <div className="w-1/3">
              <h3 className="text-xl font-semibold mb-2">Step 1</h3>
              <p className="text-lg px-4">
                <ul className="list-disc list-inside text-left">
                  <li>Sign-Up and provide your details. </li>
                  <li>Select an internship role.</li>
                  <li>You will receive an automated e-mail for password to log-in to your dashboard.</li>
                </ul>
              </p>
            </div>
            <div className="w-1/3">
              <h3 className="text-xl font-semibold mb-2">Step 2</h3>
              <p className="text-lg">
                <ul className="list-disc list-inside text-left">
                  <li>You get an e-mail having zoom meeting link for Day 1 Orientation</li>
                  <li>Checklist daily tasks to reach your goal.</li>
                  <li>You get tips and reminders.</li>
                  <li>Track your progress and tasks.</li>
                </ul>
              </p>
            </div>
            <div className="w-1/3">
              <h3 className="text-xl font-semibold mb-2">Step 3</h3>
              <p className="text-lg">
                <ul className="list-disc list-inside text-left">
                  <li>Hurray! Achieve your goal get cool swags.</li>
                  <li>Perks include certificates, LOR and goodies.</li>
                  <li>Be proud of yourself as you contributed for a social cause.</li>
                </ul>
              </p>
            </div>
          </div>
        </section>
        <section className="mt-8 text-center py-8">
          <h2 className="text-3xl font-bold mb-4">Join us in Fund-Raising Internship</h2>
          <p className="text-lg text-gray-600">
            If you are passionate about making a difference, join us in our mission!
          </p>
          <div className="flex justify-center mt-4">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg mr-10">
              JOIN US
            </button>
            
          </div>
        </section>
      </main>
      <footer className="mt-8 flex justify-center">

      </footer>
    </div>
  );
};

export default FirstPage;
