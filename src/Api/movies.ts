import {instance} from './base.api'
import {FormValues} from '../interfaces/movies.interface'

const endPoint = 'movies';

export const movies ={
    getAll: () =>{
        return instance.get(endPoint);
    },
    postAll: (data:FormValues)=>{
        return instance.post(endPoint,data);
    },
    patchLike: (movieID:string,liked:boolean )=>{

        return instance.patch(`${endPoint}/${movieID}`,{liked});
    }
}