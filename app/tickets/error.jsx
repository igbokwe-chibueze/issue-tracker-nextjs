"use client"

import Link from "next/link"

const ErrorBoundary = ({error}) => {
    error: Error
  return (
    <main className="text-center">
      <h2 className="text-3xl">We Hit a Brick Wall.</h2>
      <p>{error.message}</p>
      <p>Go back <Link href="/">Home</Link>.</p>
    </main>
  )
}

export default ErrorBoundary