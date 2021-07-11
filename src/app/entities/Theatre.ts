import { Admin } from './Admin';

import { Screens } from "./Screens";
export interface Theatre {
 
    theatreId:String;
    theatreName:string;
    theatreCity:string;
    managerName:string;
    managerContact:string;
    screens:Screens[];
    admin:Admin;
}