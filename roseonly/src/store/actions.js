import * as types from "./types";

export default {
  actimp:({commit,state},payload)=>{
    commit(types.ACTIMP,payload);
  },
  actchangeimp:({commit,state},payload)=>{
    // state.imp
    var sss=function() {
      for (var i=0;i<state.imp.length;i++){
        if (state.imp[i]._id==payload[1]){
          commit(types.ACTCHANGEIMP,[i,payload[0]]);
          console.log(111);
          return 0;

        }
      }
    }

    if ((sss())!=0){
      commit(types.ACTCHANGEIMP,[null,payload[0],payload[1]]);
    }
  },
  actyhm:({commit,state},payload)=>{
    commit(types.ACTYHM,payload);
  },
  actall:({commit,state},payload)=>{
    commit(types.ACTALL,payload);
  },
  jia:({commit,state},payload)=>{
    // console
    for (var i=0;i<state.imp.length;i++){
      if (state.imp[i]._id==payload){
        commit(types.JIA,i);
      }
    }
  },
  jian:({commit,state},payload)=>{
    // console
    for (var i=0;i<state.imp.length;i++){
      if (state.imp[i]._id==payload){
        commit(types.JIAN,i);
      }
    }
  },
  del:({commit,state},payload)=>{
    // console
    for (var i=0;i<state.imp.length;i++){
      if (state.imp[i]._id==payload){
        commit(types.DEL,i);
      }
    }
  },
}
