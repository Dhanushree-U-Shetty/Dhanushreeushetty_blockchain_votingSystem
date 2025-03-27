const { expect } = require("chai");
const { ethers } = require("hardhat");
const { expectRevert } = require('@openzeppelin/test-helpers');

describe("Voting System", function () {
  let Voting, voting;
  let owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    Voting = await ethers.getContractFactory("Voting");
    voting = await Voting.deploy(["Alice", "Bob", "Charlie"]);
    await voting.deployed();
  });

  it("Should allow valid voting", async function () {
    await voting.connect(addr1).vote(0); // vote for Alice
    const votes = await voting.getVotes(0);
    expect(votes.toNumber()).to.equal(1);
  });

  it("Should not allow double voting", async function () {
    await voting.connect(addr1).vote(1); // vote for Bob

    await expectRevert(
      voting.connect(addr1).vote(2), // try to vote again
      "Already voted"
    );
  });

  it("Should not allow invalid candidate index", async function () {
    await expectRevert(
      voting.connect(addr2).vote(99), // invalid index
      "Invalid candidate"
    );
  });
});