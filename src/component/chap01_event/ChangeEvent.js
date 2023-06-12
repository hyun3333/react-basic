import React from 'react'

const ChangeEvent = () => {

    const changeValue = () => {
        console.log('value : s');
    }
  return (
    <>
        <input type='text' onChange={changeValue}/>

        <select>
            <optionn value='pizza'>피자</optionn>
            <optionn value='chicken'>치킨</optionn>
            <optionn value='pasta'>파스타</optionn>

        </select>
    </>
  )
}

export default ChangeEvent;