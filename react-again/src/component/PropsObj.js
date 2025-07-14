import React from 'react'

function PropsObj(props) {
  return (
    <div>

        <ul>

            <li>{props.item['Name']}</li>
            <li>{props.item['Age']}</li>
            <li>{props.item['City']}</li>

        </ul>
    </div>
  )
}

export default PropsObj