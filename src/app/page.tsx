'use client';
import { useState } from "react";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file || null);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true)

    if (selectedFile) {
      // console.log(selectedFile);

      try {
        const formData = new FormData();
        formData.append("image", selectedFile);

        const response = await fetch("/api", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          setLoading(false)
          setResult(data.result)
          // console.log(data.result)
          // console.log("Photo uploaded successfully");
        } else {
          // console.log("Failed to upload photo");
          setError("Failed to upload photo")
        }
      } catch (error) {
        // console.log("An error occurred:", error);
        setError("An error occurred.")
      }
    }
  };

  return (
    <main className="flex flex-col items-center justify-between p-4 md:p-12 gap-6">
      <form className="flex flex-col border p-6 rounded w-full">
        <label className="relative flex flex-col items-center justify-center bg-gray-200 border-dashed border-2 border-gray-400 rounded p-2 cursor-pointer">
          <input
            onChange={handleFileChange}
            type="file"
            className="hidden"
            accept=".jpg,.jpeg,.png" // Specify accepted file types if necessary
          />
          {selectedFile ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Uploaded Image"
              className="object-cover h-full w-full md:h-[300px]"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2A8 8 0 102 10a8 8 0 0016 0A8 8 0 0010 2zm0 14a6 6 0 100-12 6 6 0 000 12zm1-9H9v4h2V7zm0 5H9v2h2v-2z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <span className="mt-2 text-sm text-gray-600">
            {selectedFile ? "Change" : "Upload"} image
          </span>
        </label>

        <button
          onClick={handleSubmit}
          className="mt-4 rounded p-2 bg-blue-700 hover:bg-blue-800 text-slate-50 disabled:bg-blue-200"
          type="submit"
          disabled={!selectedFile || loading}
        >
          Submit
        </button>
      </form>

      {loading ? (
        <div className="border rounded w-full p-6 animate-pulse">Loading</div>
      ) : (
        <div className="border rounded w-full p-6">
          {result ? (
            result.map((r: any) => (
              <p>{r.label} | {r.score}</p>
            ))
          ) : (
            <p>No result available</p>
          )}
        </div>
      )}

      {error && (
        <div className="w-full p-6 rounded bg-red-50 text-red-600">
          {error}
        </div>
      )}

    </main>
  );
}