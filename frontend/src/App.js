import React, {Component} from 'react';
import {onChange, postToDecode, postToEncode} from "./store/actions/codingActions";
import {connect} from "react-redux";

class App extends Component {
    state = {
        encoded: '',
        password: '',
        decoded: ''
    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    postEncode = async () => {
        const postData = {password: this.state.password, encoded: this.state.encoded};
        await this.props.postToEncode(postData);
        this.setState({decoded: this.props.decoded});
    };

    postDecode = async () => {
        const postData = {password: this.state.password, decoded: this.state.decoded};
        await this.props.postToDecode(postData);
        this.setState({encoded: this.props.encoded});
    };

    render() {
        return (
            <div className="App">
                    <textarea cols="30"
                              rows="10"
                              value={this.state.encoded}
                              name="encoded"
                              onChange={this.onChange}
                              placeholder="Encoded"/>

                <button onClick={this.postDecode}>Decode</button>
                    <input type="text" name="password" onChange={this.onChange} value={this.state.password}/>
                <button onClick={this.postEncode}>Encode</button>
                    <textarea cols="30"
                              rows="10"
                              value={this.state.decoded}
                              name="decoded"
                              onChange={this.onChange}
                              placeholder="Decoded"/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    encoded: state.encoded,
    decoded: state.decoded
});

const mapDispatchToProps = dispatch => ({
    postToEncode: postData => dispatch(postToEncode(postData)),
    postToDecode: postData => dispatch(postToDecode(postData)),
    onChange: (name, value) => dispatch(onChange(name, value))
});

export default connect(mapStateToProps, mapDispatchToProps) (App);
