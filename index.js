
     
        let output= document.getElementById('output');
    
        let input=document.getElementById('input');
        async function Search(){
            output.innerHTML="";
            const api=await fetch(`https://api.github.com/search/users?q=${input.value}`);
            const data=await api.json();
            // console.log(data.items);
            data.items.map((ele)=>{
                // console.log(ele);
                let avtar=ele.avatar_url;
                let name=ele.login
                let profile=ele.html_url;
                output.innerHTML += `
                <div class="card">
                    <img src=${avtar}>
                    <div class="userName">
                        <h3>${name}</h3>
                        <a href=${profile}>user profile</a>
                    </div>
                <div>
                `
            })

        }

        function clearData(){
            // console.log('hello');
            output.innerHTML="";
            input.value="";
        }
        