/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

function Footer() {
  return (
    <div style={{ marginTop: '-70px' }}>
      <div className="" style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ marginRight: '0.50rem' }}>Forked with ♡ from </p>
        <a href="https://uniswap.org/" target="_blank" style={{ color: '#ff007a', textDecoration: 'none' }}>
          Uniswap
        </a>
      </div>
      <div className="" style={{ display: 'flex', alignItems: 'center', marginTop: '-25px' }}>
        <p style={{ marginRight: '0.50rem' }}>and powered by</p>
        <a href="https://biconomy.io/" target="_blank" style={{ color: '#ff007a', textDecoration: 'none' }}>
          biconomy
        </a>
      </div>
    </div>
  )
}

export default Footer
