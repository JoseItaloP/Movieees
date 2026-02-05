export function SecH1({Tittle}: {Tittle: string}){
    return(
        <>
            <h1 data-testid={`${Tittle}_movie`} className="text-4xl mb-5 text-darkPink-900 dark:text-darkPink-200" id={`${Tittle}_movie`} >
                {Tittle}
            </h1>
        </>
    )
}