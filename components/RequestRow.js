import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";

class RequestRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      approveErrorMessage: "",
      approveLoading: false,
      finalizeErrorMessage: "",
      finalizeLoading: false,
    };
  }
  onApproveClick = async () => {
    this.setState({ approveLoading: true });
    const id = this.props.id;
    const address = this.props.address;
    const accounts = await web3.eth.getAccounts();
    const campaign = Campaign(address);
    try {
      await campaign.methods.approveRequest(id).send({
        from: accounts[0],
      });
    } catch (error) {
      this.setState({ approveErrorMessage: error.message });
      console.log(error);
    }
    this.setState({ approveErrorMessage: "", approveLoading: false });
  };

  onFinalizeClick = async () => {
    this.setState({ finalizeLoading: true });
    const id = this.props.id;
    const address = this.props.address;
    const accounts = await web3.eth.getAccounts();
    const campaign = Campaign(address);
    try {
      await campaign.methods.finalizeRequest(id).send({
        from: accounts[0],
      });
    } catch (error) {
      this.setState({ finalizeErrorMessage: error.message });
      console.log(error);
    }
    this.setState({ finalizeErrorMessage: "", finalizeLoading: false });
  };

  render() {
    const { Cell, Row } = Table;
    const { id, request, approversCount } = this.props;

    const readyToFinalize =
      parseInt(request.approvalCount["_hex"], 16) > parseInt(approversCount["_hex"], 16) / 2;

    return (
      <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>
          {web3.utils.fromWei(parseInt(request.value["_hex"], 16).toString(), "ether") + " ether"}
        </Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>
          {parseInt(request.approvalCount["_hex"], 16)} / {parseInt(approversCount["_hex"], 16)}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button
              onClick={this.onApproveClick}
              loading={this.state.approveLoading}
              color="green"
              basic
            >
              Approve
            </Button>
          )}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button
              onClick={this.onFinalizeClick}
              loading={this.state.finalizeLoading}
              color="teal"
              basic
            >
              Finalize
            </Button>
          )}
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;
