import React, { memo } from 'react'

const Kids = (props) => {
    console.log("Component anak");
  return (
    <div>
        <h3>Hitung Kids : {props.countChild}</h3>
        <button onClick={props.handleChild}>Tambah Kids</button>
    </div>
  )
}

export default memo(Kids)