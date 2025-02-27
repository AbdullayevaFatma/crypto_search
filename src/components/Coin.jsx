import React from 'react'

const Coin = ({coin}) => {

  const {symbol, name, iconUrl,price} = coin;
  return (
    <div className='coin'>
      <h1>Name: {name}</h1>
      <img src={iconUrl} alt={name} width={50} height={50}/>
      <h3>Price: {price}</h3>
      <h3>Symbol: {symbol}</h3>
    </div>
  )
}

export default Coin