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

    function timeTrack(address employeeAddress, uint256 amount) onlyAdmin public {
        _mint(employeeAddress, amount);
    }

//add a require here for rewards contract
    function mint(uint256 amount) public {
        _mint(msg.sender, amount);
    }

}