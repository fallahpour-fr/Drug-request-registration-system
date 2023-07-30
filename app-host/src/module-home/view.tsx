import "./style.css"

export const View = (props: any) => {
    return <div className="wrapper">
        <div className="sidebar">
            <div className="profile">
                <h3>Anamika Roy</h3>
                <p>Doctor</p>
            </div>
            <ul>
                <li>
                    <a href="#" className="active">
                        <span className="icon"><i className="fas fa-home"></i></span>
                        <span className="item"> Drug Registration</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i className="fas fa-desktop"></i></span>
                        <span className="item">Registered َpplications</span>
                    </a>
                </li>

            </ul>
        </div>
        <div className="parent-request">
            <div className="profile-request">
                <label className="input-style" htmlFor="reqtitle">Request Title </label>
                <input className="input-style" type="text" id="reqtitle" name="reqtitle" onChange={(e) => props.handleChange(e)} value={props.formData.reqtitle} />

                <button className="button-style" onClick={props.handlerOnClick} >Send</button>
            </div>
            <div className="table-request">
                <div className="container">
                    <table>
                        <thead>
                            <tr>
                                <th>Drug name</th>
                                <th>Shape</th>
                                <th>Doze</th>
                                <th>Inventory</th>
                                <th>Consumption</th>
                                <th>Requested</th>
                            </tr>
                        </thead>

                        <tbody className="table-body">
                            {props.loading ? (
                                <p>Loading data...</p>
                            ) : (
                                props.medicanInfo.map((item: any) => (
                                    <tr key={item.id}>
                                        <td>{item.medicine_name}</td>
                                        <td>{item.shape}</td>
                                        <td>{item.dose}</td>
                                        <td>{item.inventory}</td>
                                        <td></td>
                                        <td></td>
                                        {/* <td><input type="text" id={`consumption${item.id}`} placeholder="consumption" onChange={(e) => props.handleChange(e)} value={props.formData[`consumption${item.id}`]} /></td>
                                        <td><input type="text" id={`requested${item.id}`} placeholder="requested" onChange={(e) => props.handleChange(e)} value={props.formData[`requested${item.id}`]} /></td> */}
                                    </tr>
                                ))
                            )}
                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    </div>


}