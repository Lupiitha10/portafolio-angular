import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  Producto: any;
  id: any;

  constructor(private route: ActivatedRoute, 
    public ProductosService: ProductosService)  { }

  ngOnInit(): void {

    this.route.params
      .subscribe( parametros => {

        //console.log(parametros['id']);
        this.ProductosService.getProducto(parametros['id'])
        .subscribe( (producto: any) =>{
          this.id = parametros['id'];
          this.Producto = producto;
          
          
        })

    });
  }

}
