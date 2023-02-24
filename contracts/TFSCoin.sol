pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TFSCoin is ERC20{

    address private admin;

    constructor () ERC20("TFSCoin", "TFS") public {

    }

    modifier onlyAdmin {
        require(_msgSender() == admin);
        _;
    }

    function changeSupply(uint256 newSupply) public{
        _mint(account, amount);
    }
}