import React from 'react'
import './noresults.css'

const NoResults = () => {
  return (
    <div className="no-results-container">
      <div className="icon-wrapper">
        <div className="icon-search" />
      </div>
      <h2 className="no-results-title">Nenhuma propriedade encontrada</h2>
      <p className="no-results-text">Tente ajustar os filtros ou volte mais tarde.</p>
    </div>
  )
}

export default NoResults
