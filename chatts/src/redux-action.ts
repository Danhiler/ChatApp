function getData(){
    return async(dispatch:any)=>{
        const data = await getData();
        dispatch(data)
    }
}

module.exports = {
    getData
}