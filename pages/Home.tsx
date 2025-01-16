import React from "react";

import Link from "next/link";
import Header from "@/app/components/organisms/Header/Header";
import Footer from "@/app/components/organisms/Footer/Footer";

const HomePage: React.FC = () => {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Welcome to My Next.js App!</h2>
      <p>Click the button below to view the user list:</p>
      <Link href="/userlist">
        <button
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Go to User List
        </button>
      </Link>
    </main>
  );
};

export default HomePage;
