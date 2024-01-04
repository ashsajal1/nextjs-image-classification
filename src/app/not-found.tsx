import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <div className='flex items-center justify-center p-12 flex-col gap-6'>
            <img className='h-[400px] w-[400px]' src="/not-found.jpg" alt="not found image" />
            <h1 className='font-bold text-xl'>Invalid route.</h1>
            <div className='w-[200px]'>
                <Link className='p-2 rounded border bg-blue-700 hover:bg-slate-50 flex items-center justify-center gap-1 text-sm text-slate-50 hover:text-gray-600 transition duration-200' href={'/'}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    <span>
                        Go to home
                    </span>
                </Link>
            </div>
        </div>
    )
}
