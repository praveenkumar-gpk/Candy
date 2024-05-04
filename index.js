let count = 100;
function handleCLick(event)
{
    event.preventDefault();

    const candyDetails ={
        candyName : event.target.candyname.value,
        description : event.target.description.value,
        price : event.target.price.value,
        quantity : count - event.target.quantity.value

    }
    count -=event.target.quantity.value
    if (count<=0) alert('Quantity is less than 100')
    axios
        .post("https://crudcrud.com/api/1436e9fbb40743879878e14fb16d737a/chocolate",candyDetails)
            .catch(err=>alert(err))
    let newlist = document.createElement('li');
    newlist.innerHTML = candyDetails.candyName+'-'+candyDetails.description+'-'+candyDetails.price+'-'+candyDetails.quantity;
    document.getElementById('list').appendChild(newlist);
}

