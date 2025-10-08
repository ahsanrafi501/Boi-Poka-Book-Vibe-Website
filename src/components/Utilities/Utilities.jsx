const getStoredBook = () => {
    const sotredBookStr = localStorage.getItem("readList");
    
    if(sotredBookStr) {
        const storeBookData = JSON.parse(sotredBookStr);
        return storeBookData;
    }

    return [];
}

const addToStoreDb = id => {
    const storeBookData = getStoredBook();
    if(storeBookData.includes(id)){
        alert("Book is already in the List");
    }
    else{
            storeBookData.push(id);
            const data = JSON.stringify(storeBookData);
            localStorage.setItem("readList",data);
    }
}

export {addToStoreDb, getStoredBook}