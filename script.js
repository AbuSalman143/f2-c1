const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];


  
  // 1. Print Developers
  function printDeveloper() {

    let profession=data.filter((person)=>person.profession==="developer")
    console.log(profession);
 }
  
  // 2. Add Data
  function addData() {
    let newData={};
    newData.name=prompt();
    newData.age=parseInt(prompt());
    newData.profession=prompt();
    data.push(newData);
    console.log(data);



  }
  
  // 3. Remove Admins
  function removeAdmin() {
    let profession=data.filter((person)=>person.profession==="developer")
    console.log(profession);

  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let arr=[
        { name: "john", age: 24, profession: "developer" },
        { name: "jane", age: 27, profession: "admin" },
      ];

      console.log(data.concat(arr));
  }
         
  // 5. Average Age
  function averageAge() {
    let sum=0;
    for (const i in data) {
       sum=sum+data[i].age;

    }
    console.log(sum/data.length);


  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let age=data.filter((person)=>person.age>25)
    console.log(age);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
   
   let profession=data.map(person=> person.profession)
   const uniqueProfessionsSet = new Set(profession);
   console.log(uniqueProfessionsSet);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b)=>a.age-b.age)
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    for (const i in data) {
        if(data[i].name==="john"){
            data[i].profession="manager"
        }
       
    }
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
      let contDev=0;
      let contAdm=0;

      for (const i in data) {
        if(data[i].profession==="developer"){
            contDev++;
        }
       
    }
    for (const i in data) {
        if(data[i].profession==="admin"){
            contAdm++;
        }
       
    }
    console.log(contDev);
    console.log(contAdm);

  }