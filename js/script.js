// $(document).ready(function() {
//     $('#autoWidth').lightSlider({
//         autoWidth:true,
//         loop:true,
//         pauseOnHover: true,
//         enableDrag: false,
//         onSliderLoad: function() {
//             $('#autoWidth').removeClass('cS-hidden');
//         } 
//     });  
//   });

  const cardContainer = document.querySelector('.card-container')

  const modelSrc = {
      purpleGown: '3dmodel/dress4.glb',
      jacket: '3dmodel/shearling_jacket/scene.gltf',
      shoe: '3dmodel/free_air_jordan/scene.gltf',
      addidas: '3dmodel/adidas_jacket/scene.gltf'
  }
  for(product in modelSrc ){
      console.log(modelSrc[product])
      const card = document.createElement("li")
      card.classList.add("item-a", "col", "px-4" )
      card.innerHTML += `
      <!--BOX-SLIDER-------------------->
      <div class="box ">
        <a class="more-link"> go to description</a>
        <!--IMAGE-ON-THE-BOX-->
        <div class="slide-img">
          <model-viewer class="w-100 model-window"
            src="${modelSrc[product]}"
            ar
            ar-modes="webxr scene-viewer quick-look"
            ar-scale="auto"
            alt="A 3D model of the product"
            auto-rotate
            camera-controls
          ></model-viewer>
        </div>
        <div class="info-container">
          <span class="product-name">product</span>
          <span class="price">$23</span>
        </div>
      </div>
      `;
      cardContainer.appendChild(card)
  }
