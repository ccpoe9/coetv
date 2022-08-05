export interface IMovie{
    
    id : number;
    Name : string;
    Genre : string;
    Thumbnail : string;
    Video : string;
    Desc : string;
    Rating : number;
    URL : string;
}

export class Movie implements IMovie{
    
    id : number;
    Name : string;
    Genre : string;
    Thumbnail : string;
    Video : string;
    Desc : string;
    Rating : number;
    URL : string;
    
}