//lists of requests
import React, { Component } from "react";
import { Form, Message, Input, Button } from "semantic-ui-react";
import { Link, Router } from "../../../routes";
import Layout from "../../../components/Layout";
import Campaign from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";

class RequestNew extends Component {
  state = {
    value: "",
    description: "",
    recipient: "",
    errorMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const address = this.props.url.query.address;
    this.setState({ loading: true });
    const campaign = Campaign(address);
    const { description, value, recipient } = this.state;
    //value should be wei.
    //0x62ad7B7215298C6A70Ba209259e9edC58e516d3b
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
        .send({
          from: accounts[0],
        });
      Router.pushRoute(`/campaigns/${address}/requests`);
    } catch (error) {
      console.log(error);
      console.log(error.message);
      this.setState({ errorMessage: error.message });
    }
    this.setState({ loading: false, errorMessage: "", value: "", description: "", recipient: "" });
  };
  render() {
    return (
      <Layout>
        <Link to={`/campaigns/${this.props.url.query.address}/requests`}>
          <a>Back</a>
        </Link>
        <h3>New Request for Campaign {this.props.url.query.address}</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.description}
              onChange={(event) => this.setState({ description: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Value (Ether)</label>
            <Input
              value={this.state.value}
              onChange={(event) => this.setState({ value: event.target.value })}
              label="ether"
              labelPosition="right"
            />
          </Form.Field>

          <Form.Field>
            <label>Recipient</label>
            <Input
              value={this.state.recipient}
              onChange={(event) => this.setState({ recipient: event.target.value })}
            />
          </Form.Field>
          <Button primary loading={this.state.loading}>
            Create!
          </Button>
          <Message error header={"Oops!"} content={this.state.errorMessage} />
        </Form>
      </Layout>
    );
  }
}

export default RequestNew;
