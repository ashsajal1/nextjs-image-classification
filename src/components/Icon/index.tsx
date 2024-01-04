import Link from 'next/link'
import React from 'react'

export default function Icon({url, children}: {url:string,  children: React.ReactNode}) {
    return (
        <Link className="hover:text-blue-700" href={url} target="_blink">
            {children}
        </Link>
    )
}
