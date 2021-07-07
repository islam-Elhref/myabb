import React, {Component} from 'react'
import './items.css'

class Items extends Component {

     items = this.props.items;

     state = {
         items : this.items
     }

    handleAdd = (e) =>{
        let items = this.state.items ;
        let count = items.length + 1 ;
        items.push({id : count , name : 'reem' , age : 15 , Children : 0  })
        this.setState(
            items = items
        )
    }

    handleDelete = (e) => {
        let items = this.state.items ;
        items.pop() ;
        this.setState(
            items = items
        )
    }


    render() {

        const item_married = this.state.items.map((item) => {
            if (item.Children >= 1) {
                return (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.Children}</td>
                    </tr>
                )
            }
        })
        const item_single = this.state.items.map((item) => {
            if (item.Children < 1) {
                return (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.Children}</td>
                    </tr>
                )
            }
        })



        return (
            <div>
                <button onClick={this.handleAdd}>Add</button>
                <button onClick={this.handleDelete}>Delete</button>

                <table className="table_item">
                    <caption>this is my single revileation</caption>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Children</th>
                    </tr>
                    </thead>
                    <tbody>
                    {item_married}
                    </tbody>
                </table>

                <table className="table_item">
                    <caption>this is my single revileation</caption>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Children</th>
                    </tr>
                    </thead>
                    <tbody>
                    {item_single}
                    </tbody>
                </table>

            </div>
        );
    }

}

export default Items