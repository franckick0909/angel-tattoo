import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Form() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    artiste: "",
    message: "",
  });

  const [isArtisteOpen, setIsArtisteOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logique d'envoi du formulaire ici
    console.log("Formulaire soumis:", formData);
  };

  const handleReset = () => {
    setFormData({
      nom: "",
      email: "",
      artiste: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl w-full mx-auto mt-8 p-6 bg-neutral-900 rounded-lg shadow-md font-inter"
    >
      <div className="mb-4">
        <label htmlFor="nom" className="block mb-2 text-base text-white">
          Nom :
        </label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 text-neutral-200 border border-neutral-600 bg-black rounded-sm focus:outline-none focus:border-b-custom-green placeholder:text-neutral-500 placeholder:text-sm"
          placeholder="Votre nom"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-base text-white">
          Email :
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Votre email"
          className="w-full px-3 py-2 text-neutral-200 border border-neutral-600 bg-black rounded-sm focus:outline-none focus:border-b-custom-green placeholder:text-neutral-500 placeholder:text-sm"
        />
      </div>
      <div className="mb-4 relative">
        <label htmlFor="artiste" className="block mb-2 text-base text-white">
          Artiste :
        </label>
        <div
          className="relative"
          onClick={() => setIsArtisteOpen(!isArtisteOpen)}
        >
          <div
            id="artiste"
            className="w-full px-3 py-2 text-neutral-200 border border-neutral-600 rounded-sm focus:outline-none focus:border-b-custom-green bg-black text-sm flex justify-between items-center cursor-pointer placeholder:text-neutral-500 placeholder:text-sm"
          >
            {formData.artiste || "Sélectionnez un artiste"}
            <motion.div
              animate={{ rotate: isArtisteOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown className="text-neutral-400" />
            </motion.div>
          </div>
          <AnimatePresence>
            {isArtisteOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute z-10 w-full mt-1 bg-black border border-neutral-600 rounded-sm shadow-lg"
              >
                {["", "artiste1", "artiste2", "artiste3", "artiste4"].map((option) => (
                  <div
                    key={option}
                    className="px-3 py-2 hover:bg-neutral-800 cursor-pointer text-white"
                    onClick={() => {
                      setFormData({ ...formData, artiste: option });
                      setIsArtisteOpen(false);
                    }}
                  >
                    {option || "Sélectionnez un artiste"}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-base text-white">
          Message :
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Votre message ici"
          className="w-full px-3 py-2 text-neutral-200 border border-neutral-600 bg-black rounded-sm focus:outline-none focus:border-b-custom-green placeholder:text-neutral-500 placeholder:text-sm min-h-32 resize-none"
        ></textarea>
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="px-4 py-2 font-medium text-black bg-white rounded-sm hover:bg-neutral-200 focus:outline-none focus:shadow-outline transition-colors duration-300"
        >
          Envoyer
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="px-4 py-2 font-medium text-white bg-neutral-700 rounded-sm hover:bg-neutral-800 focus:outline-none focus:shadow-outline transition-colors duration-300"
        >
          Réinitialiser
        </button>
      </div>
    </form>
  );
}
