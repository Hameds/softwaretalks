import React from 'react'

const square = <div className="c-square" />

export function component() {
  return (
    <div>
      {Array.from({ length: 9 })
        .fill(undefined)
        .map(() => square)}
    </div>
  )
}
