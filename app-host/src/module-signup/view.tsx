import { IModel } from "./model"

export const View = (props:IModel) => {
    return <div>
        <h3>Sign Up</h3>
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="fname">First Name :</label>
            <input type="text" id="fname" name="fname" onChange={(e)=>props.handleChange(e)} value={props.formData.fname} />
            <label htmlFor="lname">Last name:</label>
            <input type="text" id="lname" name="lname"  onChange={(e)=>props.handleChange(e)} value={props.formData.lname}  />
            <label htmlFor="username">user name:</label>
            <input type="text" id="username" name="username" value={props.formData.username} onChange={(e)=>props.handleChange(e)}   />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={props.formData.password}  onChange={(e)=>props.handleChange(e)}   />
            <label htmlFor="jobpostion">Job position:</label>
            <select id="jobpostion" name="jobpostion" value={props.formData.jobpostion}  onChange={(e)=>props.handleChange(e)}  >
                <option value="Doctor">Doctor</option>
                <option value="central storekeeper">central storekeeper</option>
                <option value="Storekeeper of center one">Storekeeper of center one</option>
            </select>
            <label htmlFor="idcenter">Central number:</label>
            <select id="idcenter" name="idcenter" value={props.formData.centername}  onChange={(e)=>props.handleChange(e)}  >
                <option value="centralone">center one</option>
            </select>
            <input type="submit" value="Submit" />
        </form>
    </div>
}