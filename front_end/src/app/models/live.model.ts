export interface ILive{
    
    id : number;
    Name : string;
    EPGID : string;
    Thumbnail : string;
    Source : string;
}

export class Live implements ILive{
    id: number;
    Name: string;
    EPGID: string;
    Thumbnail: string;
    Source: string; 
}