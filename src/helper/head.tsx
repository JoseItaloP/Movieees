import React from 'react'
type head ={
    tittle: string
}

const Head = ( {tittle}: head ) => {
    React.useEffect(()=>{
        document.title = tittle
    }, [tittle])
  return (
    <> 
    </>
  )
}

export default Head