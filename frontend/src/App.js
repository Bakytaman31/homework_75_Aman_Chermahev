import React, {Component} from 'react';
import {onChange, postToDecode, postToEncode} from "./store/actions/codingActions";
import {connect} from "react-redux";

class App extends Component {

    onChange = event => {
        this.props.onChange(event.target.name, event.target.value);
    };

    postToEncode = () => {
        const postData = {password: this.props.password, text: this.props.encoded};
        this.props.postToEncode(postData);
    };

    postToDecode = () => {
        const postData = {password: this.props.password, text: this.props.decoded};
        this.props.postToDecode(postData);
    };

    render() {
        return (
            <div className="App">
                <form>
                    <textarea cols="30"
                              rows="10"
                              value={this.props.encoded}
                              name="encoded"
                              onChange={this.onChange}
                              placeholder="Encoded"/>
                    <button onClick={this.postToDecode}>Decode</button>
                    <input type="text" name="password" onChange={this.onChange} value={this.props.password}/>
                    <button onClick={postToEncode}>Encode</button>
                    <textarea cols="30"
                              rows="10"
                              value={this.props.decoded}
                              name="decoded"
                              onChange={this.onChange}
                              placeholder="Decoded"/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    encoded: state.encoded,
    decoded: state.decoded,
    password: state.password
});

const mapDispatchToProps = dispatch => ({
    postToEncode: postData => dispatch(postToEncode(postData)),
    postToDecode: postData => dispatch(postToDecode(postData)),
    onChange: (name, value) => dispatch(onChange(name, value))
});

export default connect(mapStateToProps, mapDispatchToProps) (App);
