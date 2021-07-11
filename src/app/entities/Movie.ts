import { Screens } from "./Screens";

export interface MovieShows{
    movieId:String;
    movieStartTime:any;
    movieEndTime:any;
    movieGenre:String;
    language:String;
    description:String;
    movieName:String;
    imageLink:String;
    trailer:String;
    price: Number;
    movieHours:String
   screens:Screens;
}