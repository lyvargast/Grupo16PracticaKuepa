import './modaleditarcategoria.css';

function ModalEditarCategoria(){
	return(
    <div className="modal fade" id="ModalEditarCategoria" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
          <div className="cajaboton1 d-flex justify-content-end">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        <div className="modal-header justify-content-center">
          <div className="titulomodal "> 
              <h1 className="modal-title" id="exampleModalLabel">EDITAR CATEGORIA</h1>
          </div>
          
      
        </div>
        <div className="modal-body">
        <div class="mb-3">
            <input class="form-control" type="file" id="formFile" />
            <label for="formFile" class="form-label d-flex justify-content-center">Añadir imagen</label>
        <div class="mb-3">
              <textarea class="form-control" placeholder="Inserte el nombre de la categoría" id="exampleFormControlTextarea1" rows="2"></textarea>
        </div>
     
        </div>
        </div>
        <div className="modal-footer justify-content-center">
          <button type="button" className="btnanadirprodu2" data-bs-dismiss="modal">Guardar</button>
        </div>
      </div>
    </div>
  </div>
    

		);

}
export default  ModalEditarCategoria;