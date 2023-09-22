const loadDataFromLs = () =>{
    const isExist = localStorage.getItem('applied-jobs');
    if(isExist){
        return JSON.parse(isExist);
    }
    else{
        return [];
    }
}

const setDataOnLs = (id) =>{
    const getDataFromLs = loadDataFromLs();
    const alreadyExist = getDataFromLs.find((data) => data === id);
    if(!alreadyExist){
        getDataFromLs.push(id)
    }
    localStorage.setItem('applied-jobs', JSON.stringify(getDataFromLs))
}

export {setDataOnLs, loadDataFromLs};