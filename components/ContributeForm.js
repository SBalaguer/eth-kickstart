import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Router } from "../routes.js";

class ContributeForm extends Component {
  state = {
    value: "",
    errorMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const address = this.props.address;
    const campaign = Campaign(address);
    this.setState({ loading: true });
    try {
      const accounts = await web3.eth.getAccounts();

      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether"),
      });
      Router.replaceRoute(`/campaigns/${address}`);
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
    this.setState({ loading: false, value: "", errorMessage: "" });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Amount to Contribute</label>

          <Input
            value={this.state.value}
            onChange={(event) => this.setState({ value: event.target.value })}
            label="ether"
            labelPosition="right"
          />
        </Form.Field>
        <Button primary loading={this.state.loading}>
          Contribute
        </Button>
        <Message error header={"Oops!"} content={this.state.errorMessage} />
      </Form>
    );
  }
}

export default ContributeForm;
