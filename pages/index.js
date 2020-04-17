import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";

import { Link } from "../routes";

import Layout from "../components/Layout";

class CampaignIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaigns: [],
    };
  }

  // static async getInitialProps() {
  //   const campaigns = await factory.methods.getCampaigns().call();
  //   // console.log(campaigns);
  //   return { campaigns };
  // }
  async componentDidMount() {
    const campaigns = await factory.methods.getCampaigns().call();
    // console.log(campaigns);
    this.setState({ campaigns });
  }

  renderCampaigns() {
    const items = this.state.campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaigns</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns </h3>
          <Link route="campaigns/new">
            <a>
              <Button floated="right" content="Create Campaign" icon="add circle" primary />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
