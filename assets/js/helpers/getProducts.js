async function getProducts () {
    //window.fetch('https://ecomercebackend.fundamentos-29.repl.co').then((res) => res.json()).then((data) => data)
    
  try {  
    const res = await window.fetch('https://ecommercebackend.fundamentos-29.repl.co')
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }  
}

export default getProducts