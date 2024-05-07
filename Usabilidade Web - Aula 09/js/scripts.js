function onPageLoad(){

    fetch("https://randomuser.me/api/?results=50")
    .then(function response(data){

        const promiseData = data.json()
        console.log(promiseData)

        promiseData.then(response =>{
            insertUsers(response.results)
        })
       
       /* promiseData.then(function responseData(response){
            insertUsers(response)
        })*/
    })

    loadComponents()

}

function insertUsers(data){
    console.log(data)
}

function loadComponents(){
    console.log("loadComponents")

}