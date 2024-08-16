import { Card } from "./cardShow";



export type TBodySearch = {
    results: Card[], 
    type: string, 
    previusPage: ()=>void, 
    positionPage: number[], 
    pageNumber: number, 
    max: number, 
    nextPage: ()=>void,
    JumptoPage: (element: number)=>void
}

export type TJumpPage = Omit<TBodySearch, 'results' | 'type'>