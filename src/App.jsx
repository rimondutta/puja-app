import React, { useState, useCallback } from "react";
import Layout from "./components/Layout";
import FormCard from "./components/FormCard";
import ResultModal from "./components/ResultModal";
import { funnyResponses } from "./data/funnyResponses";

const App = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [modalResult, setModalResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setLoading(true);
    setModalResult(null);

    setTimeout(() => {
      const randomResponse =
        funnyResponses[Math.floor(Math.random() * funnyResponses.length)];
      setModalResult(randomResponse);
      setLoading(false);
    }, 2000);
  }, []);

  const closeModal = useCallback(() => {
    setModalResult(null);
    setName("");
    setAddress("");
  }, []);

  return (
    <Layout>
      <FormCard
        name={name}
        setName={setName}
        address={address}
        setAddress={setAddress}
        onSubmit={handleSubmit}
        loading={loading}
        modalResult={modalResult}
      />

      <footer className="mt-8 text-center text-sm text-slate-600">
        Developed by{" "}
        <a
          href="https://www.facebook.com/dutta.rimon"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black-600 hover:underline"
        >
          Rimon Dutta
        </a>
      </footer>

      <ResultModal result={modalResult} onClose={closeModal} />
    </Layout>
  );
};

export default App;
