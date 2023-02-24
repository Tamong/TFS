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

}