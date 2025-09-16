import { Header } from 'components'
import React from 'react'

const dashboard = () => {

  const user = {
    name: "David",
  }

  return (
    <main className='dashboard wrapper'>
      <Header 
        title={`Welcome ${user?.name ?? "Guest"}`}
        description = "Track activities and manage your account"
      />

      Dashboard Page Content
    </main>
  )
}

export default dashboard