// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.14;

import "lib/forge-std/src/mocks/MockERC20.sol";

contract ERC20Mintable is MockERC20{
    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals
    ) MockERC20() {}

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}
