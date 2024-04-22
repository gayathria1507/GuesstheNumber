var usernum=document.getElementById("usernum")
        var result=document.getElementById("res")
        var rnum=Math.floor(Math.random()*10)+1
        var score=document.getElementById("score")
        var s=5
        function clicks(){
            var num=usernum.value
            
            if(rnum==num)
            {
                res.textContent="Right"
                alert("You WON....")
                b.style.backgroundColor="green"
                b.style.color="white"
            }
            else{
                if(s>0){
                s=s-1
                score.textContent="Score:"+s
                res.textContent="Wrong"
                b.style.backgroundColor="red"
                b.style.borderColor="grey"
                b.style.color="white"
                }
                else{
                    res.textContent="Sorry you loss the game Try again"
                }
               
            }
        }