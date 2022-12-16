// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Zegara {
    // Storage Var
    uint256 public funds = 1000;
    int256 public counter = -10;
    uint32 public test = (2**32) - 1;

    // modifier restricted() {
    //   require(
    //     msg.sender == owner,
    //     "This function is restricted to the contract's owner"
    //   );
    //   _;
    // }

    // function setCompleted(uint completed) public restricted {
    //   last_completed_migration = completed;
    // }
}
