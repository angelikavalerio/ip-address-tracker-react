import { useState } from 'react'

const searchInputStyle = {
  borderTopLeftRadius: 12,
  borderBottomLeftRadius: 12,
  padding: 12,
  maxWidth: 300,
  width: 300,
  border: 'none',
  outline: 'none'
}

const searchFormStyle = {
  height: 40,
  display: 'flex',
  justifyContent: 'center'
}

export default function SearchBar({ onHandleSearch, onSetIpAddress }) {
  const [bgColor, setBgColor] = useState('black')

  function handleFormSubmit(e) {
    e.preventDefault()
    onHandleSearch()
  }



  const buttonSubmitStyle = {
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    width: 40,
    border: 'none',
    backgroundColor: bgColor,
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <form style={searchFormStyle} onSubmit={handleFormSubmit}>
      <input type="text" name="search" style={searchInputStyle} placeholder="Search for any IP address or domain" onInput={(e) => onSetIpAddress(e.target.value)} />
      <button
        type="submit"
        style={buttonSubmitStyle}
        onMouseEnter={() => setBgColor('hsl(0, 0%, 17%)')}
        onMouseLeave={() => setBgColor('black')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" /></svg>
      </button>
    </form>
  )
}
