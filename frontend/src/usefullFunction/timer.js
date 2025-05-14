import { useState } from "react";
const [hour,setHour] = useState(0);
const [minute,setMinute] = useState(0);
const [second,setSecond] = useState(0);

const getTimer = (h,m,s) =>{
    for(let i=0;i<=60;i++){
        setSecond(i);
        if(second == 60){
            setSecond(0);
            setMinute(minute + 1);
            if(minute == 60){
                setMinute(0);
                setHour(hour + 1);
            }
        }
    }
}
//not completed