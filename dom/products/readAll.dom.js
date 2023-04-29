$.ajax({
    method: `get`,
    // data:{

    // },
    url: `http://localhost:9000/products`,
    success: (result)=>{
        console.log(result)
        let getProducts= document.getElementById(`getProducts`)
        let product= result.products
        console.log(product)
        for(let i=0; i<product.length; i++){
           //console.log(product[i])
            
         getProducts.innerHTML= getProducts.innerHTML + `
                    <tr>
                        <td>${product[i].id}</td>
                        <td>${product[i].name}</td>
                        <td>${product[i].description}</td>
                        <td>${product[i].units}</td>
                        <td>${product[i].value}</td>
                        <td>
                            <button type="button" >
                                <a href="">
                                    <img src="../../Assets/icons8-ver-detalles-64.png" width=30px>
                                </a>
                            </button>
                            <button type="button">
                                <a href="./updateProduct.html" target="_blank">
                                    <img src="../../Assets/icons8-edit-64.png" width=30px>
                                </a>
                            </button>
                            <button type="button">
                                <a href="">
                                    <img src="../../Assets/icons8-borrar-para-siempre-64.png" width=30px>
                                </a>
                            </button>
                        </td>
                        
                    </tr>`
                }
            }

  })
