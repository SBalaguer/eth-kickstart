pragma solidity ^0.4.17;

contract CampaignFactory{
    address[] public deployedCampaigns;
    function createCampaign(uint minimun) public{
        address newCamapign = new Campaign(minimun, msg.sender);
        deployedCampaigns.push(newCamapign);
    }
    function getCampaigns() public view returns(address[]){
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description; //will be input of the user
        uint value; //will be input of the user
        address recipient; //will be input of the user
        bool complete; //will be programatic when voting is completed
        mapping(address => bool) approvals; // this do not need a starting value
        uint approvalCount; //only the yes votes!
    }
    modifier restricted(){
        require(msg.sender == manager, "Restirced only for Project Owner.");
        _;
    }
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    constructor(uint minimum, address creator) public{
        manager = creator;
        minimumContribution = minimum;
    }
    function contribute() public payable{
       require(msg.value > minimumContribution,"Contribution lower than minimum expected.");
       approvers[msg.sender] = true;
       approversCount ++;
    }
    function createRequest(string description, uint value, address recipient) public restricted {
        //this will create a new request struct
        Request memory newRequest = Request ({
        //First request: variable type request; newRequest name of variable; Request({}) to create a new instance.
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           approvalCount: 0
        });
        //alternative syntax, where we put only the input; order is crucial! --> Request(description, value, recipient, false)
        requests.push(newRequest);
    }
    function approveRequest(uint index) public {
       Request storage request = requests[index]; // this creates a local variable used in this function
       require(approvers[msg.sender], "User not authorized. Need to contribute first."); //checks this person has donated.
       require(!request.approvals[msg.sender], "User already approved.");
       request.approvals[msg.sender] = true;
       request.approvalCount++;
    }
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        require(!request.complete, "Request has already finalized.");
        require(request.approvalCount > approversCount/2, "There are not enough positive votes.");
        request.recipient.transfer(request.value); //recipient is an address so it has the transfer property;
        request.complete = true;
    }

    function getSummary() public view returns (
      uint, uint, uint, uint, address
      ) {
        return (
          minimumContribution,
          this.balance,
          requests.length,
          approversCount,
          manager
        );
    }

    function getRequestsCount() public view returns (uint){
        return requests.length;
    }

}