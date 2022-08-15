export interface ITv{
    
    id : number;
    Name : string;
    Genre : string;
    Thumbnail : string;
    Desc : string;
    Rating : number;
    URL : string;
}

export class Tv implements ITv{
    
    id : number;
    Name : string;
    Genre : string;
    Thumbnail : string;
    Desc : string;
    Rating : number;
    URL : string;
    
}