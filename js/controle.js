
        function control(){
            test=document.getElementsByTagName('p')
            champ=document.getElementsByTagName('input')
            for(let i=0;i<9;i++){
                test[i].innerHTML = '';
                champ[i].style.borderBottom = '1px solid white';
            }
            nom=document.getElementById('first').value;
            pre=document.getElementById('last').value;
            lol=document.getElementById('lol').value;
            mail=document.getElementById('email').value;
            tel=document.getElementById('phone').value;
            from=document.getElementById('from').value;
            team=document.getElementById('team').value;
            leader=document.getElementById('leader').value;
            lane=document.getElementById('lane').value;
            if (nom == "" || !(isAlpha(nom))) {
                document.getElementById('p1').style.color = 'red';
                document.getElementById('first').style.borderBottom = '3px solid red';
                if(nom == ""){
                    document.getElementById('p1').innerHTML = 'Required fields !';
                }
                else{
                    document.getElementById('p1').innerHTML = 'invalid field !';
                }
            }
            if (pre == "" || !(isAlpha(pre))) {
                document.getElementById('p2').style.color = 'red';
                document.getElementById('last').style.borderBottom = '3px solid red';
                if(pre == ""){
                    document.getElementById('p2').innerHTML = 'Required fields !';
                }
                else{
                    document.getElementById('p2').innerHTML = 'invalid field !';
                }
            }
            if (lol == "") {
                document.getElementById('p3').style.color = 'red';
                document.getElementById('lol').style.borderBottom = '3px solid red';
                document.getElementById('p3').innerHTML = 'Required fields !';
            }
            if (mail == "") {
                document.getElementById('p4').style.color = 'red';
                document.getElementById('email').style.borderBottom = '3px solid red';
                document.getElementById('p4').innerHTML = 'Required fields !';
            }
            if (tel == "" || isNaN(tel) || tel.length!=8) {
                document.getElementById('p5').style.color = 'red';
                document.getElementById('phone').style.borderBottom = '3px solid red';
                if(tel == ""){
                    document.getElementById('p5').innerHTML = 'Required fields !';
                }
                else{
                    document.getElementById('p5').innerHTML = 'invalid field !';
                }
            }
            if (from == "") {
                document.getElementById('p6').style.color = 'red';
                document.getElementById('from').style.borderBottom = '3px solid red';
                document.getElementById('p6').innerHTML = 'Required fields !';
            }
            if (team == "") {
                document.getElementById('p7').style.color = 'red';
                document.getElementById('team').style.borderBottom = '3px solid red';
                document.getElementById('p7').innerHTML = 'Required fields !';
            }
            if (leader == "" || !(isAlpha(leader))) {
                document.getElementById('p8').style.color = 'red';
                document.getElementById('leader').style.borderBottom = '3px solid red';
                if(tel == ""){
                    document.getElementById('p8').innerHTML = 'Required fields !';
                }
                else{
                    document.getElementById('p8').innerHTML = 'invalid field !';
                }
            }
            if (lane == "") {
                document.getElementById('p9').style.color = 'red';
                document.getElementById('lane').style.borderBottom = '3px solid red';
                document.getElementById('p9').innerHTML = 'Required fields !';
            }
            

        }
        function isAlpha(ch) {
        let test = true;
        let i = 0;

        while (test && i < ch.length) {
            if ((ch[i].toUpperCase() >= "A" && ch[i].toUpperCase() <= "Z") || ch[i] === " ") {
                i++;
            } else {
                test = false;
            }
        }

        return test;
        }
