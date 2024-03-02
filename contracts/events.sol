//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EventOrganizer{
    struct Event{
        address organizer;
        string name;
        uint price;
        uint date;
        uint ticketCount;
        uint ticketRemain;
    }

    mapping (uint=>Event) public events;
    mapping (address=>mapping(uint=>uint)) public tickets;
    uint public nextId;

    function creatEvent(string memory name, uint price, uint date, uint ticketCount) external {

        require(date>block.timestamp,"You can organize event in future not in past");
        require(ticketCount>0,"you have to enter tickets more than 0");
        events[nextId]=Event(msg.sender,name,price,date,ticketCount,ticketCount);
    }

    
    function BuyTicket(uint id, uint quantity) external payable{
        require(events[id].date!=0,"No such event exist");
        require(events[id].date>block.timestamp,"this event has already been occured");
        Event storage _events=events[id];
        require(msg.value==(_events.price*quantity));
        require(_events.ticketRemain>=quantity);
        _events.ticketRemain-=quantity;
        tickets[msg.sender][id]+=quantity;
    }

    function TransferTicket(address to, uint quantity, uint id) external{
        require(events[id].date!=0,"No such event exist");
        require(events[id].date>block.timestamp,"this event has already been occured");
        require(tickets[msg.sender][id]>= quantity,"You don't have enough tickets to transfer");
        tickets[msg.sender][id]-=quantity;
        tickets[to][id]+=quantity;

    }

}
