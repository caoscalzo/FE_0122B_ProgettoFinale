import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente';
import { Comune } from '../models/comune';
import { Provincia } from '../models/provincia';
import { ClienteService } from '../services/cliente.service';
import { ComuniProvinceService } from '../services/comuni-province.service';
import { DettagliClienteService } from '../services/dettagli-cliente.service';

@Component({
  template: `
    <form class="mt-5 container" #form="ngForm">

      <h2>Informazioni personali</h2>

      <div class="form-row">

        <div class="form-group col">
          <label>Nome</label>
          <input type="text" [(ngModel)]="newCliente.nomeContatto" name="nomeContatto" class="form-control"/>
        </div>

        <div class="form-group col">
          <label>Cognome</label>
          <input type="text" [(ngModel)]="newCliente.cognomeContatto" name="cognomeContatto" class="form-control"/>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col">
          <label>Ragione Sociale</label>
          <input type="text" [(ngModel)]="newCliente.ragioneSociale" name="ragioneSociale" class="form-control"/>
        </div>

        <div class="form-group col">
          <label>Partita IVA</label>
          <input type="number" [(ngModel)]="newCliente.partitaIva" name="partitaIva" class="form-control"/>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col">
          <label>Email</label>
          <input type="email" [(ngModel)]="newCliente.email" name="email" class="form-control"/>

        </div>
        <div class="form-group col">
          <label>PEC</label>
          <input type="email" [(ngModel)]="newCliente.pec" name="pec" class="form-control"/>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col">
          <label>Telefono Contatto</label>
          <input type="text" class="form-control" [(ngModel)]="newCliente.telefonoContatto" name="telefonoContatto" id="telefonoContattoInput" />
        </div>

        <div class="form-group col">
          <label>Email Contatto</label>
          <input type="email" class="form-control" [(ngModel)]="newCliente.emailContatto" name="emailContatto" id="emailContattoInput" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col">
          <label>Telefono</label>
          <input type="phone" [(ngModel)]="newCliente.telefono" name="telefono" class="form-control"/>
        </div>

        <div class="form-group col">
          <label>Tipo Cliente</label>
          <select class="form-control" [(ngModel)]="newCliente.tipoCliente" name="ragioneSociale">

            <option selected>...</option>
            <option>SRL</option>
            <option>SPA</option>
            <option>SAS</option>
            <option>PA</option>
          </select>

        </div>
      </div>
    </form>

    <!--Sede operativa-->

    <div class="form-row justify-content-around container">
      <h2>Sede operativa</h2>
      <div class="col">
        <form class="mt-3 ">
          <div class="form-row">
            <div class="form-group">
              <label>Indirizzo</label>
              <input
                type="text"
                [(ngModel)]="newCliente.indirizzoSedeOperativa.via"
                name="via"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Civico</label>
              <input
                type="text"
                [(ngModel)]="newCliente.indirizzoSedeOperativa.civico"
                name="civico"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label>Cap</label>
              <input
                type="number"
                [(ngModel)]="newCliente.indirizzoSedeOperativa.cap"
                name="cap"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Localit??</label>
              <input
                type="text"
                [(ngModel)]="newCliente.indirizzoSedeOperativa.localita"
                name="localita"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Provincia</label>

              <select
                class="form-select"
                [(ngModel)]="newCliente.indirizzoSedeOperativa.comune.provincia"
                name="nome"
                class="form-control"
              >
                <!-- <option selected>Seleziona Provincia</option> -->
                <option *ngFor="let item of province" [ngValue]="item">
                  {{ item.nome }}
                </option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Comune</label>

              <select
                class="form-select"
                [(ngModel)]="newCliente.indirizzoSedeOperativa.comune"
                name="nome"
                class="form-control"
              >
                <!-- <option selected>Seleziona Comune</option> -->
                <option *ngFor="let item of comuni" [ngValue]="item">
                  {{ item.nome }}
                </option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <!--Sede legale-->
      <div class="col">
        <form class="mt-3">
          <h2>Sede legale</h2>
          <div class="form-row">
            <div class="form-group">
              <label>Indirizzo</label>
              <input
                type="text"
                [(ngModel)]="newCliente.indirizzoSedeLegale.via"
                name="via"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Civico</label>
              <input
                type="text"
                [(ngModel)]="newCliente.indirizzoSedeLegale.civico"
                name="civico"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label>Cap</label>
              <input
                type="number"
                [(ngModel)]="newCliente.indirizzoSedeLegale.cap"
                name="cap"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Localit??</label>
              <input
                type="text"
                [(ngModel)]="newCliente.indirizzoSedeLegale.localita"
                name="localita"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Provincia</label>
              <select
                class="form-select"
                [(ngModel)]="newCliente.indirizzoSedeLegale.comune.provincia"
                name="nome"
                class="form-control"
              >
                <!-- <option selected>Seleziona Provincia</option> -->
                <option *ngFor="let provincia of province" [ngValue]="provincia">
                  {{ provincia.nome }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Comune</label>
              <select
                class="form-select"
                [(ngModel)]="newCliente.indirizzoSedeLegale.comune"
                name="nome"
                class="form-control"
              >
                <!-- <option selected>Seleziona Comune</option> -->
                <option *ngFor="let comune of comuni" [ngValue]="comune">
                  {{ comune.nome }}
                </option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            class="btn btnAddUser col my-3 btn-success"
            (click)="addCliente(newCliente)"
          >
            Aggiungi
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [],
})
export class DettagliClientePage implements OnInit {
  constructor(
    private dettClienteSrv: DettagliClienteService,
    private comProvSrv: ComuniProvinceService,
    private router: Router,
    private clientSrv: ClienteService
  ) {}

  tipiClienti: any;
  comuni: Comune[];
  province: Provincia[];
  response: any;
  idProvincia: any;
  provincia1: string;
  provincia2: string;
  filterComuni: Comune[] = [];

  newCliente: Cliente = new Cliente();

  ngOnInit(): void {
    this.dettClienteSrv.getTipiCliente().subscribe((c) => {
      this.tipiClienti = c;
    });
    this.comProvSrv.getAllProvince(0).subscribe((c) => {
      //console.log(c);
      this.response = c;
      this.province = this.response.content;
    });
    this.comProvSrv.getAllComuni(0).subscribe((c) => {
      //console.log('c', c);
      this.response = c;
      this.comuni = this.response.content;
    });
  }
  cambioCitta1(event: any) {
    this.idProvincia = event.target.value;
    console.log(this.idProvincia);
    let filterComuni: Array<any> = [];
    this.comuni.filter((comune) => {
      if (this.idProvincia == comune.provincia.id) {
        filterComuni.push(comune);
      }
    });
    console.log(filterComuni);
    this.filterComuni = filterComuni;
  }

  addCliente(newCliente: Cliente) {
    console.log(newCliente);
    this.clientSrv.createCliente(newCliente).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/clienti']);
    });
  }
}
