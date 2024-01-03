'use client';
import { useState } from "react";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file || null);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (selectedFile) {
      console.log(selectedFile);

      try {
        const formData = new FormData();
        formData.append("image", selectedFile);

        const response = await fetch("/api", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("Photo uploaded successfully");
        } else {
          console.log("Failed to upload photo");
        }
      } catch (error) {
        console.log("An error occurred:", error);
      }
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action="" className="flex border p-6 rounded">
        <input onChange={handleFileChange} type="file" placeholder="Upload jpg file" />
        <button onClick={handleSubmit} className="rounded p-2 bg-blue-700 text-slate-50" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}