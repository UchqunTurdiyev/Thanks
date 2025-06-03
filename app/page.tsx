// app/thanks/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <main className="thanks-container">
      <div className="thanks-card">
        <h1>Raxmat!</h1>
        <p>
          ISFT institutiga qiziqish bildirganingiz uchun minnatdormiz. 
          Tez orada mutaxassislarimiz siz bilan bog‘lanishadi!
        </p>
        <Link href="https://www.instagram.com/isft_institute/" target="_blank" rel="noopener noreferrer">
          <button className="instagram-button">
            <FaInstagram className="instagram-icon" /> Instagram
          </button>
        </Link>
      </div>
      <style jsx>{`
        .thanks-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #f0f0f0, #ffffff);
          padding: 20px;
        }

        .thanks-card {
          background: #fff;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 500px;
          width: 100%;
        }

        .thanks-card h1 {
          color: #ff4d6d;
          font-size: 36px;
          margin-bottom: 20px;
        }

        .thanks-card p {
          color: #333;
          font-size: 18px;
          margin-bottom: 30px;
        }

        .instagram-button {
          background-color: #ff4d6d;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 30px;
          font-size: 16px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .instagram-button:hover {
          background-color:rgb(51, 255, 99);
        }

        .instagram-icon {
          font-size: 20px;
        }
      `}</style>
    </main>
  );
};

export default Home;
