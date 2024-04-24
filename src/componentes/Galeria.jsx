
import Titulo from './Titulo'


function galeria(){
    return(
     
     <>

     <div class="containerimg">
     
     <Titulo titulo={"Galeria"} />

     <div class="galeria">

<figure>
<img src="./public/img1.jpg" alt="" class="galeria_img" />
</figure>

<figure>
<img src="./public/img2.jpg" alt="" class="galeria_img" />
</figure>

<figure>
<img src="./public/img3.jpg" alt="" class="galeria_img" />
</figure>

<figure>
<img src="./public/img4.jpg" alt="" class="galeria_img" />
</figure>

<figure>
<img src="./public/img5.jpg" alt="" class="galeria_img" />
</figure>

<figure>
<img src="./public/img6.jpg" alt="" class="galeria_img" />
</figure>

   
     </div>

     </div>

     </>

    )

}

export default galeria;