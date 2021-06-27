// This statement specifies the compatible compiler versions
pragma solidity >=0.5.0;


// Declare a contract 
contract Healthrecords {
    string bloodgroup = "None";
    string diseases = "None";
    string medications = "None";
    string allergies = "None";
    uint weight = 0;
    uint height = 0;
    uint age = 0;
    uint insurance = 0;
    

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

    function getWeight() public view returns (uint) {
        return weight;
    }

    function getHeight() public view returns (uint) {
        return height;
    }

    function getAge() public view returns (uint) {
        return age;
    }

    function getInsurance() public view returns (uint) {
        return insurance;
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

    function setWeight(uint nweight) external {
        weight = nweight;
    }

    function setHeight(uint nheight) external {
        height = nheight;
    }

    function setAge(uint nage) external {
        age = nage;
    }

    function setInsurance() external {
        if (age < 18){
            insurance = 2;
        }
        else if (age > 18 && age < 25){
            insurance = 5;
        }
        else if (age > 25 && age < 45){
            insurance = 10;
        }
        else {
            insurance = 15;
        }

    }


}
