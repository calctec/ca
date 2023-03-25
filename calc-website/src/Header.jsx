import React from 'react'

const Header = ({title,image,children}) => {
  return (
    <header className='header'>
        <div className="header_continer">
            <div className="header_container-bg">
                <img src={image} alt="header img" />
            </div>
            <div className="header_content">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </div>
    </header>
    )
}

export default Header