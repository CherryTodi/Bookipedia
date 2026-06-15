import React from "react";
import Navbar from "./Navbar";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md">

          <h1 className="text-5xl font-bold mb-6">
            Contact Us
          </h1>

          <form className="space-y-4">

            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Email address"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label>Message</label>
              <textarea
                rows="5"
                placeholder="Type your message"
                className="w-full border rounded px-3 py-2"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>

          </form>

        </div>
      </div>
    </>
  );
}

export default Contact;