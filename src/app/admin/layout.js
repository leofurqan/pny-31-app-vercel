import Link from 'next/link'
import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <div>
      <nav>
        <ul>
            <li><Link href="/admin/dashboard">Dashboard</Link></li>
            <li><Link href="/admin/products">Products</Link></li>
            <li>Categories</li>
        </ul>
      </nav>

      {children}

      <footer>
        <h2>Copyright 2024. All Rights Reserved</h2>
      </footer>
    </div>
  )
}
