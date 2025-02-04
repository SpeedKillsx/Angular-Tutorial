export interface IRole{
    roleId:number;
    role:string;
}

export interface IDesigniation{
    designationId: number;
    designation:string;

}



export interface APIResponseModel{
    message:string;
    result:boolean;
    data:any;

}