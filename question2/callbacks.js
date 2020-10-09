const resolvedPromise  = () =>{
    setTimeout(()=> {
        let success = {'message' : 'resolved promise'} 
        console.log(success);

    },500)
}

const rejectedPromise   = () => {
    setTimeout(()=> {
        try
        {
            throw new Error();
        }
        catch(e)
        {
            let error = {'error' : 'rejected exception'}
            console.log(error);
        }
    },500)
}

resolvedPromise()
rejectedPromise()