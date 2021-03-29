export const navigation = [
  {
    name: 'Acceuil',
    url: '/home',
    icon: 'icon-speedometer',
  },
  {
    name : 'Gestion des utilisateurs',
    url: '/list/users',
    icon: 'fa fa-users',
    roles: ['ADMIN MSS','ADMIN ORGANISME']
  },
  {
    name: 'Gestion du stock',
    url: '/article',
    icon: 'fa fa-users',
    roles: ['ADMIN MSS', 'ADMIN ORGANISME']
  },
  {
    name: 'Gestion des clients',
    url: '/client',
    icon: 'fa fa-users',
    roles: ['ADMIN MSS', 'ADMIN ORGANISME']
  },
  {
    name: 'Gestion des fournisseurs',
    url: '/fournisseur',
    icon: 'fa fa-users',
    roles: ['ADMIN MSS', 'ADMIN ORGANISME']
  },
  {
    name: 'Gestion des voitures',
    url: '/voiture',
    icon: 'fa fa-users',
    roles: ['ADMIN MSS', 'ADMIN ORGANISME']
  },
  {
    name: 'Gestion des OR',
    url: '/ordreDeReparation',
    icon: 'fa fa-users',
    roles: ['ADMIN MSS', 'ADMIN ORGANISME']
  },
  {
    name: 'Reglement Client',
    url: '/ReglementClient',
    icon: 'fa fa-users',
    roles: ['ADMIN MSS', 'ADMIN ORGANISME']
  },
  {
    name: 'Gestion des Achats',
    url: '/BonDeReception',
    icon: 'fa fa-users',
    roles: ['ADMIN MSS', 'ADMIN ORGANISME']
  },
  {
    name: 'ReglementFournisseur',
    url: '/ReglementFournisseur',
    icon: 'fa fa-users',
    roles: ['ADMIN MSS', 'ADMIN ORGANISME']
  },

 
  {
    name: 'Configuration ' ,
    url : '',
    icon : 'fa  fa-gears',
    roles: ['SUPERVISEUR'],   
    children : [
      {
        name : 'Enseignes',
        url: '/list/enseignes',
        permission:'Merchant',
      },
      {
        name : 'Magasins',
        url: '/list/magasins',
        permission:'Magasin' 
      },
      {
        name : 'TPEs',
        url: '/list/tpe',
       permission:'Tpe' 
      },
      {
        name : 'Terminaux',
        url: '/list/terminaux',
        permission:'Terminal'
      }
    ]
  },
  
  
];
