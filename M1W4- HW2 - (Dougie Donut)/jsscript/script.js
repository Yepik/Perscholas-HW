//const button = document.getElementById("dogBreedButton");
const boroughsArray = [
  "Bronx",
  "Brooklyn",
  "Manhattan",
  "Queens",
  "staten island",
];
const agency = "NYPD";
const textAreaInput = document.getElementById("inputEvent");
class boroughs {
  static counter = 0;

  constructor(boroughInput, agencyInput) {
    this.borough = boroughInput;
    this.temp_borough=boroughInput
    if("STATEN ISLAND".toLowerCase()==this.temp_borough){
        this.temp_borough='statenisland'
        }
    this.div = document.getElementById(
      "buttons"
    ).innerHTML += `<button id="${this.temp_borough}" onclick="${this.temp_borough.toLowerCase()}.fetchingData(${this.temp_borough.toLowerCase()}.borough,'${boroughInput}')">${this.temp_borough}</button>`;
    this.button = document.getElementById(`${this.temp_borough}`);
    this.borough = boroughInput;
    this.agency = agencyInput;
    // this.eventListener = this.button.addEventListener("click",this.fetchingData(boroughInput))
  }
  compare( a, b ) {
    if ( a.last_nom < b.last_nom ){
      return -1;
    }
    if ( a.last_nom > b.last_nom ){
      return 1;
    }
    return 0;
  }
  
  
  fetchingData(boroughInput,boroughName) {
    let url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=${
      this.agency
    }&borough=${boroughName.toUpperCase()}`;
    const textAreaOutput = document.getElementById("output");
    
    if("STATEN ISLAND".toLowerCase()==boroughInput){
        boroughInput='statenisland'
        }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {console.log(data)
        textAreaOutput.innerHTML = "";
        let tempArray =[]
        let latitude =[]
        let longitude =[]
        for (let i = 0; i < textAreaInput.value; i++) {
            tempArray.push({descriptor:data[i].descriptor, resolution:data[i].resolution_description})
            latitude.push(data[i].latitude)
            longitude.push(data[i].longitude)
        }
        console.log(latitude, longitude)
        let tempArray2=tempArray.sort(( a, b )=> {
            if ( a.descriptor < b.descriptor ){
              return -1;
            }
            if ( a.descriptor > b.descriptor ){
              return 1;
            }
            return 0;
          })
        for (let i = 0; i < textAreaInput.value; i++) {
          textAreaOutput.innerHTML += `<div ><table id="row${i}"><tr><td>${
            tempArray[i].descriptor
          }</td><td><button type="button" onclick="${boroughInput.toLowerCase()}.responseMessage('${
            tempArray[i].resolution
          }','row${i}')">What did police do?</button></td></tr></table></div>`;
        }
        textAreaOutput.innerHTML+= "";
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