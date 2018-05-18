import * as types from "./types";

export default {
  [types.ACTIMP]:(state,payload)=> {
    state.imp=payload;
  },
  [types.ACTCHANGEIMP]:(state,payload)=> {
    if (payload.length==3){
      state.imp.push({'_id':payload[2],'sl':payload[1]});
    }else {
      state.imp[payload[0]]['sl']=(state.imp[payload[0]]['sl']-0)+(payload[1]-0);
    }
  },
  [types.ACTYHM]:(state,payload)=> {
    state.yhm=payload;
  },
  [types.ACTALL]:(state,payload)=> {
    state.all=payload;
  },
  [types.JIA]:(state,payload)=> {
    state.imp[payload].sl++;
  },
  [types.JIAN]:(state,payload)=> {
    state.imp[payload].sl--;
  },
  [types.DEL]:(state,payload)=> {
    state.imp.splice(payload,1);
  },
}
