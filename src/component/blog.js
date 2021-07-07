import React, {Component} from 'react';
import axios from 'axios';

class Blog extends Component {

    state = {
        users: ''
    }


    componentDidMount() {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                const users = res.data

                let theusers = users.map(user => {
                    return (

                        <tbody>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                        </tbody>
                    )
                })

                this.setState({
                    users: theusers
                })
            })
    }

    render() {
        return (
            <div>
                <table className="table_item">
                    <caption>this is users</caption>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>username</th>
                        <th>email</th>
                    </tr>
                    </thead>
                    {this.state.users}
                </table>
            </div>

        )
            ;
    }

}

export default Blog;