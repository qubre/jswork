//9X9的空表，请自行编写这段代码


//倒九九乘法空表
str = '<table border="1">'
for(let i=9;i>0;--i){
    str += '<tr>'
    for(var j=i;j>0;--j){
        str += '<td>&nbsp;</td>'
    }
    str += '</tr>'
}
str += '</tablr>'
document.getElementById('table2').innerHTML = str


