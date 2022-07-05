import ApiService from "../apiservice";

export default class LancamentoService extends ApiService {
  constructor() {
    super("/api/lancamentos");
  }

  consultar(lancamentoFiltro) {
    let params = `?ano=${lancamentoFiltro.ano}`;

    if (lancamentoFiltro.mes) {
      params = `${params}&mes=${lancamentoFiltro.mes}`;
    }
    if (lancamentoFiltro.tipo) {
      params = `${params}&tipo=${lancamentoFiltro.mes}`;
    }
    if (lancamentoFiltro.status) {
      params = `${params}&status=${lancamentoFiltro.mes}`;
    }

    return this.get(params);
  }
}
