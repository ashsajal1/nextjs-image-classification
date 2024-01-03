import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action="" className='flex border p-6 rounded'>
        <input type='file' placeholder='Upload jpg file' />
        <button className='rounded p-2 bg-blue-700 text-slate-50' type='submit'>Submit</button>
      </form>
    </main>
  )
}
