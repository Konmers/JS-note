var data = { 
              a1:{tit:'ddd'},
              a2:{tit:'ccc'},
              a3:{tit:'sds'},
              a4:{tit:'sdsdfff'}
           }
for(item in data){
   console.log('tit:'+item+'  '+'值：'+data[item].tit)
}

console:
    tit:a1  值：ddd
    tit:a2  值：ccc
    tit:a3  值：sds
    tit:a4  值：sdsdfff
