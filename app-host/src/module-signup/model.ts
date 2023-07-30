export interface IModel {
    handleSubmit:(e:any)=>void,
    handleChange:(e:any)=>void,
    formData:formDataModel
}

export interface formDataModel {
    fname: string
    lname:string
    username:string
    password:string
    jobpostion:string 
    centername:string
}