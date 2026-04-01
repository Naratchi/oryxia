export interface Project {
  slug: string
  nom: string
  categorie: string
  tag: string
  annee: string
  secteur: string
  timeline: string
  url: string | null
  intro: string
  challenge: string
  solution: string
  services: string[]
  resultats: { valeur: string; label: string }[]
  projetSuivant: string
  gradient1: string
  gradient2: string
  image?: string
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: 'luxplafond',
    nom: 'LuxPlafond',
    categorie: 'PREMIUM 3D',
    tag: 'Site Premium 3D',
    annee: '2025',
    secteur: 'Construction / Rénovation',
    timeline: '3 semaines',
    url: 'https://luxplafond.be',
    tags: ['Site Premium 3D', 'Visuels 3D IA', 'Estimateur'],
    intro:
      "LuxPlafond est une entreprise spécialisée dans les plafonds tendus haut de gamme. Ils avaient besoin d'un site qui reflète la qualité de leur travail et génère des leads qualifiés directement depuis le web.",
    challenge:
      "L'ancien site ne reflétait pas le positionnement premium de l'entreprise. Les visiteurs ne comprenaient pas la valeur du produit et quittaient sans demander de devis.",
    solution:
      "Nous avons créé une expérience immersive avec des visuels 3D générés par IA, un estimateur de prix interactif et une architecture de contenu pensée pour convertir. Chaque section guide l'utilisateur vers la demande de devis.",
    services: ['Design Premium', 'Visuels 3D IA', 'Estimateur interactif', 'Capture leads'],
    resultats: [
      { valeur: '+340%', label: 'Demandes de devis' },
      { valeur: '3 sem', label: 'Délai de livraison' },
      { valeur: '4.9/5', label: 'Satisfaction client' },
    ],
    projetSuivant: 'faunalis',
    gradient1: 'linear-gradient(135deg,#1a0505,#2d0808)',
    gradient2: 'linear-gradient(135deg,#3d0a0a,#8b1a1a)',
    image: '/projets/luxplafond.png',
  },
  {
    slug: 'faunalis',
    nom: 'Faunalis',
    categorie: 'SITES VITRINES',
    tag: 'Site Vitrine Pro',
    annee: '2025',
    secteur: 'Médical / Vétérinaire',
    timeline: '2 semaines',
    url: 'https://faunalis.be',
    tags: ['Site Vitrine Pro', 'Multi-pages', 'SEO local'],
    intro:
      "Faunalis est un cabinet vétérinaire spécialisé en animaux domestiques et sauvages. Urgences 24/7, présentation des spécialités et prise de contact directement depuis le site.",
    challenge:
      "La clinique n'avait pas de site web professionnel. Les propriétaires d'animaux dans le quartier ne les trouvaient pas en ligne, et les quelques avis Google positifs ne se traduisaient pas en nouveaux clients.",
    solution:
      "Un site vitrine multi-pages avec un design épuré, une section équipe pour humaniser la clinique, et une stratégie SEO local ciblant les recherches vétérinaires dans le quartier.",
    services: ['Site Vitrine Pro', 'Multi-pages', 'SEO local', 'Urgences 24/7'],
    resultats: [
      { valeur: '+180%', label: 'Visites organiques' },
      { valeur: 'Top 3', label: 'Google Maps local' },
      { valeur: '2 sem', label: 'Délai de livraison' },
    ],
    projetSuivant: 'cabinet-medical',
    gradient1: 'linear-gradient(135deg,#0a1628,#0f2040)',
    gradient2: 'linear-gradient(135deg,#142035,#1e3a5f)',
    image: '/projets/faunalis.png',
  },
  {
    slug: 'cabinet-medical',
    nom: 'Cabinet Médical',
    categorie: 'SITES VITRINES',
    tag: 'Site Vitrine Pro',
    annee: '2025',
    secteur: 'Médical / Santé',
    timeline: '2 semaines',
    url: null,
    tags: ['Site Vitrine Pro', 'Prise de RDV', 'SEO local'],
    intro:
      "Cabinet médical pluridisciplinaire à Bruxelles. Présentation de l'équipe, prise de RDV en ligne et FAQ complète pour rassurer les nouveaux patients avant leur première visite.",
    challenge:
      "Les patients potentiels n'avaient aucune information sur le cabinet en ligne. La prise de rendez-vous se faisait uniquement par téléphone, surchargeant la secrétaire.",
    solution:
      "Site vitrine avec intégration d'un système de prise de RDV en ligne, présentation claire du médecin et des services, et optimisation SEO pour les recherches locales.",
    services: ['Site Vitrine Pro', 'Prise de RDV', 'Équipe médicale', 'FAQ'],
    resultats: [
      { valeur: '-60%', label: 'Appels secrétariat' },
      { valeur: '+220%', label: 'Nouveaux patients' },
      { valeur: '2 sem', label: 'Délai de livraison' },
    ],
    projetSuivant: 'pro-plomberie',
    gradient1: 'linear-gradient(135deg,#051428,#0a2040)',
    gradient2: 'linear-gradient(135deg,#0a1e3d,#1040a0)',
    image: '/projets/cabinet-medical.png',
  },
  {
    slug: 'pro-plomberie',
    nom: 'Pro Plomberie',
    categorie: 'SITES BASIQUES',
    tag: 'Site Basique',
    annee: '2025',
    secteur: 'Artisanat / Plomberie',
    timeline: '1 semaine',
    url: null,
    tags: ['Site Basique', 'Appel direct', 'Zones d\'intervention'],
    intro:
      "Expert en plomberie et chauffage en Wallonie. Appel direct, zones d'intervention et formulaire de devis rapide pour être trouvé par les clients en urgence.",
    challenge:
      "Sans site web, Pro Plomberie était invisible en ligne. Les clients trouvaient des concurrents sur Google et appelaient directement.",
    solution:
      "Un site one-page rapide à charger, optimisé pour le mobile, avec numéro click-to-call en évidence, liste des services, zone d'intervention et avis clients.",
    services: ['Site Basique', 'Appel direct', 'Zones d\'intervention', 'Formulaire devis'],
    resultats: [
      { valeur: '1 sem', label: 'Délai de livraison' },
      { valeur: '+90%', label: 'Appels entrants' },
      { valeur: 'Top 5', label: 'Google local' },
    ],
    projetSuivant: 'coachfit',
    gradient1: 'linear-gradient(135deg,#0a1428,#0f1e3d)',
    gradient2: 'linear-gradient(135deg,#142050,#1e3080)',
    image: '/projets/pro-plomberie.png',
  },
  {
    slug: 'coachfit',
    nom: 'CoachFit',
    categorie: 'SITES VITRINES',
    tag: 'Site Vitrine Pro',
    annee: '2025',
    secteur: 'Sport / Bien-Être',
    timeline: '2 semaines',
    url: null,
    tags: ['Site Vitrine Pro', 'Réservation', 'Témoignages'],
    intro:
      "Coach sportif personnel à Uccle. Présentation du coach, services, galerie transformations et réservation de séance découverte directement depuis le site.",
    challenge:
      "Le coaching est un marché saturé. CoachFit avait du mal à justifier ses tarifs premium sans une présence en ligne qui reflète son expertise et sa méthode unique.",
    solution:
      "Un site vitrine premium avec une présentation de la méthode, des témoignages vidéo, un système de réservation de séances découverte et une galerie de transformations.",
    services: ['Site Vitrine Pro', 'Réservation en ligne', 'Galerie', 'Témoignages'],
    resultats: [
      { valeur: '+260%', label: 'Séances découverte' },
      { valeur: '+45%', label: 'Tarif moyen client' },
      { valeur: '2 sem', label: 'Délai de livraison' },
    ],
    projetSuivant: 'luxplafond',
    gradient1: 'linear-gradient(135deg,#140a00,#281400)',
    gradient2: 'linear-gradient(135deg,#281400,#4a2800)',
    image: '/projets/coachfit.png',
  },
]

export const featuredProjects = projects.slice(0, 3)
