import Recat , {Component} from 'react'

class FormTest extends Component{

    state = {
        city : ''
    }

    HandleChange = (e) => {
        this.setState({
            city : e.target.value
        })
    }

    HandleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state.city)
    }

    render() {
        return (
            <div>
                <form action="" method="post" onSubmit={this.HandleSubmit} >
                    <select name="city" id="" onChange={this.HandleChange}>
                        <option value="elminia">elminia</option>
                        <option value="aswian">aswian</option>
                        <option value="asewit">asewit</option>
                        <option value="cairo">cairo</option>
                    </select>

                    <button type="submit">send</button>
                </form>
                {this.state.city}
            </div>
        );
    }



}


export default FormTest