import axios from "axios";

export const commonAPI = async (httpMethod,url,reqBody,reqHeader)=>{
    const reqConfig={
        method:httpMethod,
        url,
        data:reqBody,
        headers:{
            "Content-Type":'application/json'
        }
    }
    return await axios(reqConfig).then(
        (res)=>{
            // console.log(res);
            return res
        }
    ).catch(err=>{
        // console.log(err);
    return err
})
}