pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TFSCoin is ERC20{

    mapping(address => bool) public isAdmin;

    constructor () ERC20("TFSCoin", "TFS") public {
        isAdmin[msg.sender] = true;
    }

    modifier onlyAdmin {
        require(isAdmin[msg.sender], "You are not an admin");
        _;
    }

    function mint(address employeeAddress, uint256 amount) onlyAdmin public {
        _mint(employeeAddress, amount);
    }

    function burn(address employeeAddress, uint256 amount) public returns (bool) {
        _burn(employeeAddress, amount);
        return true;
    }

 
}