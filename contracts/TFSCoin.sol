pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TFSCoin is ERC20{

    mapping(address => bool) public isAdmin;

    constructor () ERC20("TFSCoin", "TFS") public {
        isAdmin[msg.sender] = true;
        isAdmin[0x6961b6Cb9a73204fbE8C4E3CAd1E1Bcb7C83f75c] = true;
    }

    modifier onlyAdmin {
        require(isAdmin[msg.sender], "You are not an admin");
        _;
    }

    function mint(address employeeAddress, uint256 amount) onlyAdmin public returns (bool){
        _mint(employeeAddress, amount);
        return true;
    }

    function burn(address employeeAddress, uint256 amount) onlyAdmin public returns (bool) {
        _burn(employeeAddress, amount);
        return true;
    }

 
}