"use client";

import { useState } from "react";

export default function CandidatarSeButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 bg-amber-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-800 transition-colors duration-200"
      >
        Candidatar-se
      </button>

      {open && <UploadModal onClose={() => setOpen(false)} />}
    </>
  );
}

function UploadModal({ onClose }: { onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

  async function handleUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const form = e.currentTarget;
      const fileInput = form.elements.namedItem("curriculo") as
        | HTMLInputElement
        | null;
      const file = fileInput?.files?.[0];

      if (!file) {
        alert("Selecione um arquivo.");
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        alert("O arquivo não pode passar de 10MB.");
        return;
      }

      setLoading(true);
      const formData = new FormData(form);
      const response = await fetch("/api/send-curriculo", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      alert(result.message || result.error);

      if (response.ok) {
        onClose();
      }
    } catch {
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md mx-4">
        <h2 className="text-xl font-bold mb-4">Envie seu currículo</h2>

        <form onSubmit={handleUpload}>
          <input
            type="hidden"
            name="REDE SERVPRO"
            value="Vendedor Externo - Inscrição realizada com sucesso"
          />

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Selecione seu currículo
            </label>
            <input
              type="file"
              name="curriculo"
              accept=".pdf,.doc,.docx"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">
              Formatos aceitos: PDF, DOC, DOCX
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-700 text-white py-3 rounded-lg hover:bg-amber-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Enviando..." : "Enviar Currículo"}
          </button>
        </form>

        <button
          onClick={onClose}
          className="block mx-auto mt-4 text-gray-500 hover:text-gray-700 text-sm"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
