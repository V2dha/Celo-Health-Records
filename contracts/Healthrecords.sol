// This statement specifies the compatible compiler versions
pragma solidity >=0.5.0;



// Declare a contract 
contract Healthrecords {
    string bloodgroup = "None";
    string diseases = "None";
    string medications = "None";
    string allergies = "None";
    string weight = "None";
    string height = "None";
    string age = "None";
    

    // Declares a function called getName
    // The 'public' label means the function can be called internally, by transactions or other contracts
    // The 'view' label indicates that the function does not change the state of the contract
    // The function returns a string, from the memory data location

    function getBloodgroup() public view returns (string memory) {
        return bloodgroup;
    }

    function getDisease() public view returns (string memory) {
        return diseases;
    }

    function getMedication() public view returns (string memory) {
        return medications;
    }

    function getAllergy() public view returns (string memory) {
        return allergies;
    }

    function getWeight() public view returns (string memory) {
        return weight;
    }

    function getHeight() public view returns (string memory) {
        return height;
    }

    function getAge() public view returns (string memory) {
        return age;
    }

    function setBloodgroup(string calldata nbloodgroup) external {
        bloodgroup = nbloodgroup;
    }

    function setDisease(string calldata ndiseases) external {
        diseases = ndiseases;
    }

    function setMedication(string calldata nmedication) external {
        medications = nmedication;
    }

    function setAllergy(string calldata nallergies) external {
        allergies = nallergies;
    }

    function setWeight(string calldata nweight) external {
        weight = nweight;
    }

    function setHeight(string calldata nheight) external {
        height = nheight;
    }

    function setAge(string calldata nage) external {
        age = nage;
    }

}
