import type { NextPage } from 'next'

import { Header } from '@components'
import { EIcons } from '@constants'

const Home: NextPage = () => {
  const handleButtonClick = () => {
    console.log('Button was clicked')
  }

  return (
    <div>
      <Header
        title="Портреты"
        description="Фото Катерины Петровой"
        buttonText="Следующая категория"
        onButtonClick={handleButtonClick}
        buttonIcon={EIcons.ArrowRight}
      />

      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
        alt="cat"
      />
    </div>
  )
}

export default Home
