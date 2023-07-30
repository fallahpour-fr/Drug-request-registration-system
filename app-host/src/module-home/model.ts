export interface IData{
    id:number,
    center_id:number,
    medican_name:string,
    shape:string,
    dose:string,
    inventory:number
}

export interface IFormModel{
    reqtitle: string,
    consumption:string,
    requested: string
}

export interface IMedicanRequestModel{
    id:string,
    center_id:string,
    medicine_name: string,
    shape: string,
    dose: string,
    inventory: string,
    consumption:string,
    requested: string,
    reqtitle:string
}

export interface IModel{
    medican_info:Array<IData>,
    formData:IFormModel,
    handleChange:(e:any)=>void,
    handlerOnClick:(e:any)=>void
}