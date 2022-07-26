export interface IMovie{
    id : number;
    Name : string;
    Genre : string;
    FileRef : string;
    Desc : string;
}

export class Movie implements IMovie{
    id: number ;
    Name: string;
    Genre: string;
    FileRef: string;
    Desc: string;
    
}