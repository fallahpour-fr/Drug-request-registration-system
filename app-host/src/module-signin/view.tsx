import { IModel } from "./model"

export const View = (props:IModel) => {
    return <div>
        <h3>Sign In</h3>
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="username">user name:</label>
            <input type="text" id="username" name="username" value={props.formData.username} onChange={(e)=>props.handleChange(e)}  />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={props.formData.password}  onChange={(e)=>props.handleChange(e)}  />
          
            <input type="submit" value="Submit" />
        </form>
    </div>
}