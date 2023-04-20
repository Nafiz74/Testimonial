(function(){
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    const btn= document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    function Customer(img, name, text){
        this.img=img
        this.name=name
        this.text=text
    }
    function createCustomer(img, name, text){
        let Img = `./img/${img}.jpeg`
        let customer = new Customer(Img, name, text)
        customers.push(customer)
    }
    createCustomer(0, 'Nafizul Islam', 'This was a feel good movie. I loved the cast and character development felt real to me. If characters dont gel, I cant get into the movie. It is definitely worth a watch')
    createCustomer(1, 'Mushfiq Ali', 'This was a feel good movie. I loved the cast and character development felt real to me. If characters dont gel, I cant get into the movie. It is definitely worth a watch')
    createCustomer(2, 'Shafiul Abrar', 'This was a feel good movie. I loved the cast and character development felt real to me. If characters dont gel, I cant get into the movie. It is definitely worth a watch')
    createCustomer(3, 'Nahid chowdhury', 'This was a feel good movie. I loved the cast and character development felt real to me. If characters dont gel, I cant get into the movie. It is definitely worth a watch')
    createCustomer(4, 'Abdullah', 'This was a feel good movie. I loved the cast and character development felt real to me. If characters dont gel, I cant get into the movie. It is definitely worth a watch')
    
    btn.forEach(function(button){
        button.addEventListener('click',function(e) {
            if(e.target.parentElement.classList.contains('prevBtn')){
                if(index===0){
                    index= customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
            if(e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index===customers.length){
                    index=0
                }
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })


    })
 

})()
