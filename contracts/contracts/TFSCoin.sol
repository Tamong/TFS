pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract TFSCoin is ERC20{

    mapping(address => bool) public isAdmin;

    constructor () ERC20("TFSCoin", "TFS") public {
        isAdmin[msg.sender] = true;
        isAdmin[0x6961b6Cb9a73204fbE8C4E3CAd1E1Bcb7C83f75c] = true;
    }

    modifier onlyAdmin {
        require(isAdmin[msg.sender], string.concat("TFSCoin: This is not an admin address: ", Strings.toHexString(uint256(uint160(msg.sender)), 20)));
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

    
    function addAdmin(address newAdmin) onlyAdmin public {
        isAdmin[newAdmin] = true;
    }


 
}