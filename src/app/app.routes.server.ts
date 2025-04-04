import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },

  // Routes statiques prerender
  { path: 'modif-prestation', renderMode: RenderMode.Prerender },
  { path: 'employe-present', renderMode: RenderMode.Prerender },
  { path: 'gestion-employe', renderMode: RenderMode.Prerender },
  { path: 'gestion-garage', renderMode: RenderMode.Prerender },
  { path: 'gestion-service', renderMode: RenderMode.Prerender },
  { path: 'gestion-reparation', renderMode: RenderMode.Prerender },
  { path: 'gestion-tache', renderMode: RenderMode.Prerender },
  // ... toutes vos routes statiques

  // Routes dynamiques en SSR
  { path: 'detail-categorie/:idCat', renderMode: RenderMode.Server },
  { path: 'detail-employe/:id', renderMode: RenderMode.Server },
  { path: 'detail-devis/:id', renderMode: RenderMode.Server },
  { path: 'nouveau-devis/:idRdv', renderMode: RenderMode.Server },
  // ... toutes vos routes dynamiques

  {
    path: '**',
    renderMode: RenderMode.Prerender
  }

];
