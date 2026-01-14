
export enum ViewType {
  HOME = 'home',
  DICAS = 'dicas',
  APP_EXEMPLO = 'app_exemplo',
  ESTAGIOS = 'estagios',
  SAIBA_MAIS = 'saiba_mais',
  CONCURSOS = 'concursos',
  PROJETOS = 'projetos',
  FALE_COORDENADOR = 'fale_coordenador'
}

export interface CardConfig {
  id: ViewType;
  title: string;
  description: string;
  icon: string;
  color: string;
}
