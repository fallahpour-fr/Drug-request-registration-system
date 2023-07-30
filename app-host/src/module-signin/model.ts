export interface IModel {
    handleSubmit:(e:any)=>void,
    handleChange:(e:any)=>void,
    formData:formDataModel
}

export interface formDataModel {
    username:string
    password:string
    jobpostion:string 
}