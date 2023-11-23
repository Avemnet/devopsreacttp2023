// App.js
import React from "react";
import "./table.css";
import axios from "axios"; // uimport axios
const url = process.env.BACKEND_ENDPOINT + "/employees";
class App extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false,
        };
    }
 
    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        axios.get(
              url
            )
            .then((res) => {
                this.setState({
                    items: res.data,
                    DataisLoaded: true,
                });
            });
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded)
            return (
                <div>
                    <h1> Pleses wait some time.... </h1>
                </div>
            );
 
        return (
            <div className="App">
                <h1 className="geeks">Listado de Empleados</h1>
                <div className="container">
                    <table>
                        <tr>
                            <strong>
                                <td>Nombre</td>
                                <td>Apellido</td>
                                <td>Direccion</td>
                                <td>Ciudad</td>
                                <td>Provincia</td>
                                <td>Pais</td>
                                <td>Telefono</td>
                                <td>Mail</td>
                                <td>Estado</td>
                            </strong>
                        </tr>
                        {items.map((item) => (
                            <div className="item">
                                <tr>
                                    <ol key={item.id}>
                                        <td>

                                            {item.Emp_Name},
                                        </td>
                                        <td>
                                            {item.Emp_LastName},
                                        </td>
                                        <td>
                                            {item.Emp_Street}
                                        </td>
                                        <td>
                                            {item.Emp_State}
                                        </td>
                                        <td>
                                            {item.Emp_Province}
                                        </td>
                                        <td>
                                            {item.Emp_Country}
                                        </td>
                                        <td>
                                            {item.Emp_Phone}
                                        </td>
                                        <td>
                                            {item.Emp_Mail}
                                        </td>
                                        <td>
                                            {item.Emp_Active}
                                        </td>
                                    </ol>
                                </tr>
                            </div>
                        ))}
                    </table>
                </div>
            </div>
        );
    }
}
 
export default App;
