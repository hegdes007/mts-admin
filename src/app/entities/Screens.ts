import { Theatre } from 'src/app/entities/Theatre';
import {  MovieShows } from "./Movie";

export interface Screens{

    screenId:String;
    screenName:String;
    seat:Number;
    theatre:Theatre,
    movieShows:MovieShows[];
}