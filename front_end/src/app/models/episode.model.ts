export interface IEpisode{
    
    id : number;
    Name : string;
    ShowName : string;
    Season : number;
    Episode : number;
    Video : string;
    Desc : string;
}

export class Episode implements IEpisode
{  
    id : number;
    Name : string;
    ShowName : string;
    Season : number;
    Episode : number;
    Video : string;
    Desc : string;
    
}