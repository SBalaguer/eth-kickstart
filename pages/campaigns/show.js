import React, { Component } from "react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import { Card, Grid, Button } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import { Link } from "../../routes";

class CampaignShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minimumContribution: "",
      balance: "",
      requestCount: "",
      approversCount: "",
      manager: "",
    };
  }
  async componentDidMount() {
    const address = this.props.url.query.address;
    const campaign = Campaign(address);
    const summary = await campaign.methods.getSummary().call();
    this.setState({
      minimumContribution: parseInt(summary[0]["_hex"], 16),
      balance: parseInt(summary[1]["_hex"], 16),
      requestCount: parseInt(summary[2]["_hex"], 16),
      approversCount: parseInt(summary[3]["_hex"], 16),
      manager: summary[4],
    });
  }

  renderCards() {
    const { balance, manager, minimumContribution, requestCount, approversCount } = this.state;
    const items = [
      {
        header: manager,
        description: "The manager created this campaign and can creates requests to withdraw money",
        meta: "Address of manager",
        style: { overflowWrap: "break-word" },
      },
      {
        header: minimumContribution,
        description: "You must contribute at least this much wei to became an approver",
        meta: "Minimum Contribution (wei)",
      },
      {
        header: requestCount,
        description: "A request tries to widthdraw money from the contracts",
        meta: "Number Of Request",
      },
      {
        header: approversCount,
        description: "Number of people who have already donated to the campaign",
        meta: "Number of Approvers",
      },
      {
        header: web3.eth.utils.fromWei(balance.toString(), "ether"),
        description: "The balance is how much money this campaign has left to spend",
        meta: "Contract Balance (Ether)",
      },
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={this.props.url.query.address} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.url.query.address}/requests`}>
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
