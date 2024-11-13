for(var i=0;i<10;i++){
    if(i==3)
    {
        console.log("FIRST LOOP OVER")
        break
    }
    else{
        console.log(i)
    }
}
for(var i=0;i<10;i++){
    if(i==3){
        continue
    }else{
        console.log(i)
    }
}
    console.log("SECOND LOOP OVER")
