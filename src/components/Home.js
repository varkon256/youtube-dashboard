import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';

const HomeContainer = styled.div`
  h1 {
    height: 88px;
    font-family: Passion One;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    margin: 0px;
    margin-top: 15%;
    line-height: 88px;
    /* identical to box height */
    text-align: center;
    color: #cf2a2a;
  }
  p {
    font-family: Roboto;
    font-style: normal;
    width: 600px;
    margin-top: 5px;
    font-weight: normal;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
    line-height: 19px;
    text-align: center;
    color: #6c6c6c;
  }
  form {
    text-align: center;
  }
  input[type="text"] {
    background: #ffffff;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 10px;
    width: 555px;
    height: 45px;
    left: 357px;
    top: 532px;
    padding: 20px;
  }
  input[type="submit"] {
    width: 145px;
    margin-left: 2px;
    height: 45px;
    background: #343434;
    border-radius: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */
    text-align: center;
    color: #ffffff;
  }
`;
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const id = this.state.value;
    const data = id.substring(id.lastIndexOf("=") + 1);
    this.props.history.push('/dashboard/' + data);
  }

  render() {
    return (
      <HomeContainer>
        <h1>Commpiled</h1>
        <p>
          Great comments = Great Content and we are here to ensure that.
        </p>
        <form onSubmit = {this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="Submit" />
        </form>
      </HomeContainer>
    );
  }
}

export default withRouter(Home);
