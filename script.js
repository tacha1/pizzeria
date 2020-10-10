function validate(){
    var chks=document.getElementsByName('chk[]');
    var hasChecked=false;
    for(var i=0;i<chks.length;i++)
        {
            if(chks[i].checked)
                {
                    hasChecked=true;
                    break;
                }
        }
    if(hasChecked==false)
        {
            alert("Select any item");
            return false;
        }
    var a,b,c;
    a=Number(document.getElementById('sec').value);
    b=Number(document.getElementById('select').value);
    c=a+b;
    document.getElementById('res').value=c+'Rwf';
}