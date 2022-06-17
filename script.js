var stars = document.querySelectorAll('.stars a');

stars.forEach((starClicked,clickedIndex) => {
  starClicked.addEventListener('click',()=>{
    stars.forEach((otherStar,otherIndex)=>{
      console.log(clickedIndex+"------");
      console.log(otherIndex);
      if(otherIndex <= clickedIndex){
        otherStar.classList.add('active');
      }
    })
  })
})