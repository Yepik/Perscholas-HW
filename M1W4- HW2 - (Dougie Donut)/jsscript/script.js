//const button = document.getElementById("dogBreedButton");
const boroughsArray = [
  "Bronx",
  "Brooklyn",
  "Manhattan",
  "Queens",
  "Staten Island",
];
const agency = "NYPD";
const textAreaInput = document.getElementById("inputEvent");
class boroughs {
  static counter = 0;

  constructor(boroughInput, agencyInput) {
    this.borough = boroughInput;
    if("STATEN ISLAND"==boroughInput.toUpperCase()){boroughInput='statenisland'}
    this.div = document.getElementById(
      "buttons"
    ).innerHTML += `<button id="${boroughInput}" onclick="${boroughInput.toLowerCase()}.fetchingData(${boroughInput.toLowerCase()}.borough,${this.borough})">${boroughInput}</button>`;
    this.button = document.getElementById(`${boroughInput}`);
    this.borough = boroughInput;
    this.agency = agencyInput;
    // this.eventListener = this.button.addEventListener("click",this.fetchingData(boroughInput))
  }
  fetchingData(boroughInput,boroughName) {
    let url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=${
      this.agency
    }&borough=${boroughName.toUpperCase()}`;
    console.log(url);
    const textAreaOutput = document.getElementById("output");
    //if("STATEN ISLAND"==boroughInput.toUpperCase()){boroughInput='statenisland'}
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        textAreaOutput.innerHTML = "";
        for (let i = 0; i < textAreaInput.value; i++) {
          textAreaOutput.innerHTML += `<div ><table id="row${i}"><tr><td>${
            data[i].descriptor
          }</td><td><button type="button" onclick="${boroughInput.toLowerCase()}.responseMessage('${
            data[i].resolution_description
          }','row${i}')">What did police do?</button></td></tr></table></div>`;
        }
        textAreaOutput.innerHTML += "";
      });
  }
  responseMessage(responseMessage, element) {
    let targetElement = document.getElementById(element);
    let varaibleElement = "responseMessage"+element
    let documentElement=document.getElementById(varaibleElement)
    if(documentElement!=null && documentElement.style.display=="none"){
        documentElement.style.display="table-cell"
    }
    else if(documentElement!=null){
        documentElement.style.display="none"
    }
    else{
        targetElement.innerHTML += `<tr> <td colspan="2" id = "responseMessage${element}">${responseMessage}</td><tr>`;
    }
}}
bronx = new boroughs(boroughsArray[0], agency);
brooklyn = new boroughs(boroughsArray[1],agency);
manhattan = new boroughs(boroughsArray[2], agency);
queens = new boroughs(boroughsArray[3],agency);
statenisland = new boroughs(boroughsArray[4], agency);