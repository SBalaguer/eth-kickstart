//lists of requests
import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";
import { Link } from "../../../routes";
import Layout from "../../../components/Layout";
import Campaign from "../../../ethereum/campaign";
import RequestRow from "../../../components/RequestRow";

class RequestIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestCount: "",
      requests: [],
      approversCount: "ZARA",
    };
  }
  async componentDidMount() {
    const address = this.props.url.query.address;
    const campaign = Campaign(address);

    const requestCount = await campaign.methods.getRequestsCount().call();
    const approversCount = await campaign.methods.approversCount().call();
    const requests = await Promise.all(
      Array(parseInt(requestCount))
        .fill()
        .map((element, index) => {
          //the index is only to call the specific request
          return campaign.methods.requests(index).call();
        })
    );

    this.setState({ requestCount, requests, approversCount });
    //console.log(requests);
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    const address = this.props.url.query.address;
    const requests = this.state.requests;
    const approversCount = this.state.approversCount;
    return (
      <Layout>
        <h3>Requests</h3>
        <Link route={`/campaigns/${address}/requests/new`}>
          <a>
            <Button primary floated="right" style={{ marginBottom: 10 }}>
              New Request
            </Button>
          </a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approval Count</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>
            {requests.map((request, index) => {
              return (
                <RequestRow
                  key={index}
                  id={index}
                  request={request}
                  approversCount={approversCount}
                  address={address}
                />
              );
            })}
          </Body>
        </Table>
        <div>Found {parseInt(this.state.requestCount["_hex"], 16)} requests.</div>
      </Layout>
    );
  }
}

export default RequestIndex;
