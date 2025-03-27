// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;



contract Voting {

string[] public candidates;

mapping(uint => uint) public votes;

mapping(address => bool) public hasVoted;



event VoteCast(address voter, string candidateName, uint totalVotes);



constructor(string[] memory _candidates) {

candidates = _candidates;

}



function vote(uint candidateIndex) public {

require(!hasVoted[msg.sender], "Already voted");

require(candidateIndex < candidates.length, "Invalid candidate");



votes[candidateIndex]++;

hasVoted[msg.sender] = true;



emit VoteCast(msg.sender, candidates[candidateIndex], votes[candidateIndex]);

}



function getVotes(uint candidateIndex) public view returns (uint) {

require(candidateIndex < candidates.length, "Invalid candidate");

return votes[candidateIndex];

}

}

