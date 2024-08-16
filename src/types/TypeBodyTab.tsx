export type TBodyTab = {
    positionPage: number[], 
    previusPage: ()=>void, 
    pageNumber: number, 
    max: number, 
    JumpPage: (element: number)=>void, 
    nextPage: ()=>void
}