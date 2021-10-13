import { uiActions } from './ui-slice';

import { useSelector } from 'react-redux';
//import { memsWorkerActions, memsWorker } from './memsWorker';
//import FetchRequest from '../helpers/validation/api/FetchRequest'

//export const asyncfetchMemsData = () => {

//    return async (dispatch) => {
//        FetchRequest("https://api.imgflip.com/get_memes")
//            .then(response => {
//                return response.json();
//            })
//            .then(result => {
//                const arrayDataMems = result.data.memes;

//                arrayDataMems.map((mem, index) => {
//                    if (index < 24) {
//                        dataMemes.push(mem);
//                    } else {
//                        console.log("I got data!")
//                        return dataMemes;
//                    }
//                })
//            })
//    }
//};
