# Guide d'Administration WordPress CEIU

*Un guide complet pour gérer votre site Web WordPress*

---

## 📋 **Plan de Documentation**

Ce guide combine le contenu de formation avec des captures d'écran visuelles pour fournir des instructions étape par étape pour gérer le site Web WordPress CEIU. La documentation est organisée en sections logiques suivant les modèles de flux de travail typiques.

### **Structure Planifiée :**

1. **Démarrage** - Processus de connexion et aperçu du tableau de bord
2. **Gestion des Médias** - Téléchargements de fichiers et gestion de la bibliothèque
3. **Gestion du Contenu** - Création et modification de pages et d'articles
4. **Maîtrise de l'Éditeur de Blocs** - Utilisation efficace des blocs WordPress
5. **Gestion des Utilisateurs** - Ajout et gestion des membres de l'équipe
6. **Types de Contenu Personnalisés** - Gestion des événements et des emplacements
7. **Configuration du Site** - Paramètres et personnalisation
8. **Fonctionnalités Avancées** - Formulaires, multilingue et extensions
9. **Maintenance et Outils** - Import/export et maintenance du site
10. **Conseils et Meilleures Pratiques** - Optimisation du flux de travail et dépannage

### **Documentation Visuelle :**
- **32 Captures d'écran** à travers 15 domaines fonctionnels majeurs
- **Résolution 1200x1000** pour la clarté
- **Guidance visuelle étape par étape** pour chaque processus

---

# **Section 1 : Démarrage**

## Connexion WordPress et Accès au Tableau de Bord

La zone d'administration WordPress est votre centre de contrôle pour gérer le site Web CEIU. Cette section couvre comment accéder à la zone d'administration et naviguer dans le tableau de bord principal.

### **Accès à la Zone d'Administration**

**Chemin URL** : Votre administration WordPress peut être accessible via le chemin `/backoffice` :
- **URL de Connexion** : `https://ceiu-seic.lndo.site/backoffice`
- **Alternative** : `https://ceiu-seic.lndo.site/wp-login.php?itsec-hb-token=backoffice`

![Page de Connexion WordPress](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-01_01_login-page.png)
*L'interface de connexion WordPress avec les champs nom d'utilisateur et mot de passe*

### **Processus de Connexion**

1. **Naviguez** vers l'URL de connexion
2. **Saisissez vos identifiants**
3. **Cliquez** sur le bouton "Se connecter"

### **Récupération de Mot de Passe**

Si vous oubliez votre mot de passe :
- Cliquez sur le lien **"Mot de passe oublié ?"** sur la page de connexion
- Saisissez votre nom d'utilisateur ou adresse courriel
- Vérifiez votre courriel pour les instructions de réinitialisation
- Suivez le lien dans le courriel pour créer un nouveau mot de passe

### **Aperçu du Tableau de Bord WordPress**

Après une connexion réussie, vous verrez le tableau de bord d'administration WordPress :

![Tableau de Bord d'Administration WordPress](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-01_02_dashboard-home.png)
*Le tableau de bord principal d'administration WordPress après connexion*

#### **Éléments Clés du Tableau de Bord :**

1. **Barre d'Administration** (haut) - Accès rapide au front-end, nouveau contenu et paramètres utilisateur
2. **Navigation Principale** (barre latérale gauche) - Accès à toutes les fonctions d'administration
3. **Widgets du Tableau de Bord** (centre) - Aperçu de l'activité du site et actions rapides
4. **Options d'Écran** (haut droite) - Personnaliser ce qui apparaît sur chaque page d'administration

#### **Menu de Navigation Principal :**

- **Tableau de bord** (*Dashboard*) - Aperçu et statistiques rapides
- **Articles** (*Posts*) - Articles de blog et billets
- **Médias** (*Media*) - Images, documents et fichiers
- **Pages** (*Pages*) - Pages statiques du site Web
- **Commentaires** (*Comments*) - Commentaires d'utilisateurs et modération
- **Apparence** (*Appearance*) - Thèmes, menus et personnalisation
- **Extensions** (*Plugins*) - Modules complémentaires et extensions
- **Utilisateurs** (*Users*) - Gestion des membres de l'équipe
- **Outils** (*Tools*) - Import/export et utilitaires
- **Réglages** (*Settings*) - Configuration du site

---

# **Section 2 : Gestion des Médias**

## Gestion des Fichiers et Images

La Bibliothèque de Médias est votre hub central pour gérer tous les fichiers sur votre site Web, incluant les images, documents, vidéos et autres téléchargements. WordPress crée automatiquement plusieurs tailles des images téléchargées pour différents usages.

### **Accès à la Bibliothèque de Médias**

Naviguez vers **Médias** (*Media*) dans le menu de la barre latérale gauche pour accéder à votre bibliothèque de médias.

![Vue Grille de la Bibliothèque de Médias](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-02_01_media-library-grid.png)
*La Bibliothèque de Médias montrant tous les fichiers téléchargés en format grille*

#### **Fonctionnalités de la Bibliothèque de Médias :**

- **Vue Grille** - Disposition visuelle en miniatures (montrée ci-dessus)
- **Vue Liste** - Informations détaillées des fichiers en format tableau
- **Recherche** - Trouvez des fichiers spécifiques rapidement
- **Filtrer par Date** - Parcourez les fichiers par mois de téléchargement
- **Filtrer par Type** - Montrez seulement les images, audio, vidéo, etc.

### **Téléchargement de Nouveaux Médias**

#### **Méthode 1 : Bouton Ajouter un Média**

1. Cliquez sur le bouton **"Ajouter"** en haut de la Bibliothèque de Médias
2. Le téléchargeur de médias s'ouvrira :

![Téléchargeur d'Ajout de Médias](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-02_02_add-media-uploader.png)
*L'interface de téléchargement de médias pour ajouter de nouveaux fichiers*

3. **Glissez et déposez** les fichiers sur la zone de téléchargement, ou
4. **Cliquez "Sélectionner les fichiers"** pour parcourir et choisir des fichiers de votre ordinateur

#### **Méthode 2 : Glisser-Déposer**

- Simplement **glissez les fichiers** de votre ordinateur directement sur la page de la Bibliothèque de Médias
- Les fichiers se téléchargeront automatiquement

### **Spécifications des Fichiers**

- **Taille maximale de fichier** : 100 Mo (peut être augmentée si nécessaire)
- **Formats supportés** :
  - **Images** : JPG, PNG, GIF, WebP, SVG
  - **Documents** : PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX
  - **Audio** : MP3, WAV, OGG
  - **Vidéo** : MP4, MOV, WMV, AVI

### **Paramètres et Optimisation des Images**

Quand vous cliquez sur n'importe quelle image dans la Bibliothèque de Médias, vous pouvez modifier ses détails :

#### **Champs d'Image Essentiels :**

1. **Champ Texte Alternatif**
   - **Critique pour l'accessibilité** - aide les lecteurs d'écran à décrire les images
   - **Bénéfice SEO** - aide les moteurs de recherche à comprendre le contenu de l'image
   - **Texte de rechange** - s'affiche quand l'image ne se charge pas
   - **Toujours remplir ce champ** pour les images de contenu

2. **Champ Légende**
   - Texte optionnel qui apparaît sous les images quand affichées
   - Utile pour les crédits photo ou descriptions
   - Peut être remplacé lors de l'insertion dans le contenu

3. **Titre**
   - Nom descriptif pour le fichier
   - Aide avec l'organisation et la recherche

4. **Description**
   - Notes internes sur l'image
   - Pas affiché publiquement mais utile pour l'organisation d'équipe

### **Utilisation des Médias dans le Contenu**

#### **Obtenir les Liens d'Image**

- Cliquez **"Copier dans le presse-papiers"** pour obtenir l'URL directe vers n'importe quel fichier média
- Utilisez ceci pour créer des liens vers des documents ou partager des URLs d'images

#### **Tailles d'Images**

WordPress crée automatiquement plusieurs tailles des images téléchargées :
- **Miniature** - Petit recadrage carré (150x150px)
- **Moyen** - Version réduite (300px largeur/hauteur max)
- **Grand** - Version réduite plus grande (1024px largeur/hauteur max)
- **Taille Originale** - Dimensions originales téléchargées

Choisissez la taille appropriée selon où vous utilisez l'image pour assurer des temps de chargement rapides.

### **Conseils d'Organisation des Médias**

1. **Utilisez des noms de fichiers descriptifs** avant le téléchargement
2. **Ajoutez toujours du texte alternatif** pour l'accessibilité
3. **Optimisez les images** avant le téléchargement quand possible
4. **Utilisez les formats de fichiers appropriés** :
   - JPG pour les photos
   - PNG pour les graphiques avec transparence
   - SVG pour les logos/icônes simples
5. **Nettoyage régulier** - Supprimez les fichiers inutilisés périodiquement

# **Section 3 : Gestion du Contenu**

## Gestion des Pages et Articles

WordPress utilise deux types de contenu principaux : **Pages** pour le contenu statique (comme À Propos, Contact) et **Articles** pour le contenu dynamique (comme articles de nouvelles, billets de blog). Comprendre la différence et comment gérer les deux est essentiel pour une administration efficace du site Web.

### **Pages vs Articles**

- **Pages** : Contenu statique, hiérarchique, pas sensible au temps (À Propos, Services, Contact)
- **Articles** : Contenu dynamique, chronologique, apparaissent dans les flux et archives (Nouvelles, Articles de blog)

### **Gestion des Pages**

Naviguez vers **Pages > Toutes les Pages** pour voir et gérer les pages existantes.

![Liste de Toutes les Pages](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-03_01_all-pages-list.png)
*Liste complète des pages du site Web avec options de modification et de gestion*

#### **Fonctionnalités de Gestion des Pages :**

- **Recherche** - Trouvez des pages spécifiques rapidement en utilisant la boîte de recherche
- **Actions Groupées** - Sélectionnez plusieurs pages pour modification ou suppression en lot
- **Modification Rapide** - Faites des changements simples sans ouvrir l'éditeur complet
- **Voir** - Prévisualisez comment la page apparaît sur le site Web en direct
- **Modifier** - Ouvrez l'éditeur de page complet

#### **Création de Nouvelles Pages**

1. Cliquez **Pages > Ajouter** ou utilisez le bouton **"Ajouter"** sur l'écran Toutes les Pages
2. L'éditeur de page s'ouvrira où vous pouvez :
   - Ajouter un titre de page
   - Créer du contenu en utilisant l'éditeur de blocs
   - Définir les attributs de page (page parent, modèle, ordre)
   - Configurer les options de publication

### **Gestion des Articles**

Naviguez vers **Articles > Tous les Articles** pour voir et gérer les billets de blog et articles.

![Liste de Tous les Articles](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-04_01_all-posts-list.png)
*Liste complète des articles de blog avec options de gestion et de modification*

#### **Fonctionnalités de Gestion des Articles :**

- **Catégories** - Organisez les articles en groupes logiques
- **Étiquettes** - Ajoutez des mots-clés pour une meilleure organisation et SEO
- **Image à la Une** - Définissez une image principale qui représente l'article
- **Extrait** - Rédigez un résumé personnalisé pour les pages d'archives
- **Commentaires** - Activez/désactivez les commentaires des lecteurs par article

#### **Création de Nouveaux Articles**

1. Cliquez **Articles > Ajouter** pour créer un nouvel article de blog
2. L'éditeur d'article s'ouvre avec l'interface de l'éditeur de blocs :

![Éditeur de Nouvel Article](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-04_02_new-post-editor.png)
*L'éditeur de blocs WordPress pour créer de nouveaux articles*

### **Options de Statut du Contenu**

Les pages et articles peuvent avoir différents statuts de publication :

- **Brouillon** - Pas visible au public, travail en cours
- **En Attente de Relecture** - Marqué pour révision avant publication
- **Privé** - Visible seulement aux utilisateurs connectés avec les permissions appropriées
- **Publié** - En direct et visible sur le site Web
- **Planifié** - Programmé pour publication automatique à une date/heure future

### **Contrôles de Publication**

#### **Enregistrer vs Publier**
- **Enregistrer le Brouillon** - Pour le contenu existant non publié
- **Mettre à Jour** - Pour le contenu existant publié
- **Publier** - Pour le nouveau contenu prêt à être mis en ligne
- **Planifier** - Pour le contenu à publier à une date/heure spécifique

#### **Options de Publication**
- **Visibilité** : Public, Privé ou Protégé par Mot de Passe
- **Date de Publication** : Immédiatement ou planifié pour plus tard
- **Auteur** : À qui le contenu est attribué
- **Discussion** : Autoriser/interdire les commentaires

---

# **Section 4 : Maîtrise de l'Éditeur de Blocs**

## Travailler avec les Blocs WordPress

L'éditeur de blocs WordPress (aussi appelé Gutenberg) est un éditeur visuel qui utilise des blocs individuels pour construire le contenu. Chaque paragraphe, image, titre ou autre élément est son propre bloc qui peut être déplacé, stylisé et configuré indépendamment.

### **Interface de l'Éditeur de Blocs**

![Interface de l'Éditeur de Blocs](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-06_01_block-editor-interface.png)
*L'éditeur de blocs WordPress montrant une interface propre prête pour la création de contenu*

#### **Éléments Clés de l'Interface :**

1. **Zone de Titre d'Article** - Cliquez pour ajouter/modifier le titre de la page ou article
2. **Zone de Contenu** - Où vous ajoutez et organisez les blocs
3. **Barre Latérale de Paramètres** - Paramètres de blocs et de documents (basculer avec l'icône d'engrenage)
4. **Barre d'Outils** - Options spécifiques aux blocs apparaissent quand le bloc est sélectionné
5. **Bouton Ajouter un Bloc** (+) - Insérer de nouveaux blocs
6. **Barre d'Outils Supérieure** - Options d'enregistrement, prévisualisation et publication

### **Ajout de Contenu avec des Blocs**

![Éditeur de Blocs avec Contenu](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-06_02_block-editor-with-content.png)
*Éditeur de blocs montrant du contenu d'exemple avec des blocs de texte*

#### **Créer un Nouveau Bloc :**

1. **Cliquez le bouton (+)** ou tapez **"/"** pour ouvrir l'insereur de blocs
2. **Recherchez ou parcourez** le type de bloc dont vous avez besoin
3. **Cliquez le bloc** pour l'ajouter à votre contenu
4. **Commencez à taper** pour ajouter du contenu au bloc

### **Types de Blocs Communs**

#### **Blocs de Texte**

**Bloc Paragraphe**
- **Bloc par défaut** pour le texte de corps
- **Options de formatage** : Gras, italique, liens, couleur de texte
- **Paramètres typographiques** : Taille de police, hauteur de ligne
- **Options avancées** : Lettrine, CSS personnalisé

**Bloc Titre**
- **Six niveaux de titres** (H1 à H6)
- **H1 réservé** aux titres de pages (généré automatiquement)
- **Utilisez H2** pour les titres de contenu principaux
- **H3-H6** pour les sous-titres dans une hiérarchie logique
- **Mêmes options de formatage** que les blocs paragraphe

**Bloc Liste**
- **Listes non ordonnées** (puces)
- **Listes ordonnées** (numérotées)
- **Listes imbriquées** - Utilisez la touche Tab pour créer des sous-éléments
- **Convertir entre les types** facilement

#### **Blocs Média**

**Bloc Image**
- **Paramètres essentiels** :
  - **Texte alternatif** (requis pour l'accessibilité)
  - **Légende** (description optionnelle)
  - **Taille d'image** (miniature, moyen, grand, original)
- **Options d'alignement** : Gauche, centre, droite, large, pleine largeur
- **Options de style** : Coins arrondis, bordures
- **Options de lien** : Lier l'image au fichier média, page ou URL personnalisée

**Bloc Vidéo**
- **Télécharger des fichiers vidéo** directement
- **Intégrer depuis des URLs** (YouTube, Vimeo, etc.)
- **Options de lecture automatique et boucle**
- **Support des légendes**

#### **Blocs de Mise en Page**

**Bloc Conteneur**
- **Restreint la largeur du contenu** pour maintenir la lisibilité
- **Maximum par défaut** : 1200-1300 pixels
- **Garde le contenu centré** sur les grands écrans
- **Options d'arrière-plan** : Couleurs, dégradés, images
- **Contrôles d'espacement** : Espacement haut et bas

**Bloc Colonnes**
- **Mises en page responsives** : Les colonnes de bureau s'empilent sur mobile
- **Mises en page courantes** : 50/50, 30/70, 33/33/33
- **Pourcentages personnalisés** disponibles
- **Style individuel des colonnes**

### **Gestion des Blocs**

#### **Sélectionner des Blocs**
- **Cliquez une fois** pour sélectionner un bloc
- **Cliquez la barre d'outils** pour les options spécifiques au bloc
- **Utilisez les touches fléchées** pour naviguer entre les blocs

#### **Déplacer des Blocs**
- **Glisser-déposer** en utilisant la poignée de bloc (⋮⋮)
- **Boutons fléchés** dans la barre d'outils pour monter/descendre
- **Couper et coller** pour déplacer vers différentes sections

---

# **Section 5 : Gestion des Utilisateurs**

## Gestion des Membres d'Équipe et des Accès

WordPress inclut un système complet de gestion des utilisateurs qui vous permet de contrôler qui peut accéder à votre site Web et ce qu'ils peuvent faire. Comprendre les rôles d'utilisateurs et les permissions est crucial pour maintenir la sécurité tout en permettant la collaboration d'équipe.

### **Accès à la Gestion des Utilisateurs**

Naviguez vers **Utilisateurs > Tous les Utilisateurs** pour voir et gérer les utilisateurs du site Web.

![Liste de Tous les Utilisateurs](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-07_01_all-users-list.png)
*Liste complète des utilisateurs du site Web montrant les rôles et options de gestion*

### **Rôles d'Utilisateurs WordPress**

WordPress inclut plusieurs rôles d'utilisateurs intégrés avec différents niveaux de permissions :

#### **Administrateur**
- **Accès complet** à toutes les fonctions WordPress
- **Gérer les utilisateurs** - Créer, modifier et supprimer d'autres utilisateurs
- **Installer des extensions** et thèmes
- **Modifier les paramètres du site** et la configuration
- **Accéder à tout le contenu** peu importe l'auteur
- **Devrait être limité** aux propriétaires de site et développeurs principaux

#### **Éditeur**
- **Gestion de contenu** - Créer, modifier, publier et supprimer tous les articles et pages
- **Gestion des médias** - Télécharger et gérer tous les fichiers médias
- **Modération des commentaires** - Modérer et gérer les commentaires
- **Gestion catégories/étiquettes** - Créer et gérer les taxonomies
- **Ne peut pas accéder** aux paramètres, utilisateurs, extensions ou thèmes
- **Idéal pour** les gestionnaires de contenu et éditeurs seniors

#### **Auteur**
- **Son propre contenu seulement** - Créer, modifier, publier et supprimer ses propres articles
- **Téléchargements de médias** - Télécharger et gérer ses propres fichiers médias
- **Ne peut pas modifier** le contenu d'autres utilisateurs
- **Ne peut pas accéder** aux fonctions administratives
- **Bon pour** les contributeurs réguliers et blogueurs

### **Ajout de Nouveaux Utilisateurs**

Cliquez **Utilisateurs > Ajouter** pour créer un nouveau compte utilisateur.

![Formulaire d'Ajout de Nouvel Utilisateur](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-07_02_add-new-user-form.png)
*Le formulaire d'ajout de nouvel utilisateur avec tous les champs requis*

#### **Informations Requises :**

1. **Nom d'utilisateur** (requis)
   - **Ne peut pas être changé** après création
   - **Utilisez lettres minuscules, chiffres et traits de soulignement**
   - **Choisissez soigneusement** - c'est permanent

2. **Adresse Courriel** (requise)
   - **Doit être unique** - chaque utilisateur a besoin d'un courriel différent
   - **Utilisée pour les notifications** et réinitialisations de mot de passe
   - **Peut être changée** plus tard si nécessaire

3. **Prénom et Nom de Famille** (optionnels)
   - **Fins d'affichage** - comment le nom apparaît sur le contenu
   - **Peut être modifié** à tout moment
   - **Aide avec l'identification des utilisateurs**

4. **Rôle d'Utilisateur** (requis)
   - **Sélectionnez le niveau de permissions approprié**
   - **Peut être changé** plus tard si nécessaire
   - **Commencez avec des permissions inférieures** et augmentez au besoin

---

# **Section 6 : Types de Contenu Personnalisés**

## Gestion des Événements et Emplacements

Le site Web CEIU inclut des types d'articles personnalisés au-delà des pages et articles standard. Ces types de contenu spécialisés permettent une meilleure organisation et affichage d'informations spécifiques comme les événements et emplacements de sections locales.

### **Gestion des Événements**

Naviguez vers **Événements** (*Events*) dans le menu d'administration pour gérer les listes d'événements.

![Type d'Article Événements](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-08_01_events-post-type.png)
*Le type d'article personnalisé Événements montrant toutes les entrées d'événements*

#### **Fonctionnalités des Événements :**
- **Titre et Description** - Informations de base sur l'événement
- **Date et Heure** - Planification de l'événement
- **Informations d'Emplacement** - Où l'événement a lieu
- **Image à la Une** - Représentation visuelle de l'événement
- **Catégories** - Organisation par type d'événement (conférences, ateliers, réunions)
- **Affichage Chronologique** - Ordre automatique par date d'événement

### **Gestion des Locales (Emplacements sur Carte)**

Naviguez vers **Locales** (*Locals*) pour gérer les emplacements de sections et informations de contact.

![Type d'Article Locales](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-08_03_locals-post-type.png)
*Le type d'article personnalisé Locales pour gérer les emplacements de sections*

#### **Fonctionnalités des Locales :**
- **Nom de Section** - Identification de la section locale
- **Adresse Complète** - Détails d'emplacement complets pour la cartographie
- **Informations de Contact** - Téléphone, courriel, site Web
- **Description de Section** - Informations sur les activités locales
- **Géocodage Automatique** - Adresses automatiquement converties en coordonnées de carte
- **Affichage de Carte Interactive** - Emplacements montrés sur la carte du site Web

---

# **Section 7 : Configuration du Site**

## Paramètres et Personnalisation WordPress

WordPress inclut des paramètres complets pour configurer le comportement, l'apparence et la fonctionnalité de votre site Web. Comprendre ces paramètres assure que votre site fonctionne efficacement et répond aux besoins de votre organisation.

### **Paramètres Généraux**

Naviguez vers **Réglages > Général** pour configurer les informations de base du site.

![Paramètres Généraux](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-11_01_general-settings.png)
*Page des paramètres généraux WordPress pour la configuration de base du site*

#### **Paramètres Généraux Clés :**

1. **Titre du Site**
   - **Nom principal du site** qui apparaît dans les titres de navigateur et résultats de recherche
   - **Utilisé dans la navigation** et l'image de marque à travers le site
   - **Important pour le SEO** - devrait inclure des mots-clés pertinents

2. **Slogan**
   - **Brève description** du but de votre site Web
   - **Apparaît dans les résultats de recherche** et flux RSS
   - **Gardez concis** - habituellement une phrase

### **Paramètres de Lecture**

Naviguez vers **Réglages > Lecture** pour contrôler l'affichage du contenu.

![Paramètres de Lecture](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-11_02_reading-settings.png)
*Paramètres de lecture pour contrôler l'affichage du contenu et les flux*

### **Paramètres des Permaliens**

Naviguez vers **Réglages > Permaliens** pour configurer la structure des URLs.

![Paramètres des Permaliens](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-11_03_permalink-settings.png)
*Paramètres des permaliens pour une structure d'URL favorable au SEO*

#### **Options de Structure d'URL :**

1. **Simple** - Utilise les IDs d'articles (pas recommandé)
2. **Jour et Nom** - Inclut la date dans l'URL
3. **Mois et Nom** - Mois et année dans l'URL
4. **Numérique** - Année, mois, jour et ID
5. **Nom de l'Article** - URLs propres avec juste le titre d'article (recommandé)
6. **Structure Personnalisée** - Définissez votre propre modèle

#### **Permaliens Favorables au SEO :**
- **Utilisez la structure "Nom de l'article"** pour le meilleur SEO
- **Crée des URLs propres** comme `/a-propos/` au lieu de `/?p=123`
- **Améliore l'expérience utilisateur** et les classements des moteurs de recherche
- **Définissez une fois et évitez de changer** pour prévenir les liens brisés

---

# **Section 8 : Fonctionnalités Avancées**

## Formulaires, Support Multilingue et Extensions

Le site Web CEIU inclut plusieurs fonctionnalités avancées qui étendent la fonctionnalité WordPress au-delà de la gestion de contenu de base. Ces outils permettent une interaction utilisateur améliorée, une accessibilité internationale et des capacités étendues.

### **Gestion des Formulaires (Forminator)**

Naviguez vers **Forminator > Formulaires** pour gérer les formulaires de contact et collecte de données.

![Tableau de Bord Forminator](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-09_01_forminator-dashboard.png)
*Tableau de bord de l'extension Forminator pour la gestion complète des formulaires*

#### **Fonctionnalités de Forminator :**
- **Constructeur glisser-déposer** - Créez des formulaires visuellement
- **Types de champs multiples** - Texte, courriel, liste déroulante, case à cocher, téléchargement de fichier
- **Logique conditionnelle** - Montrer/cacher des champs basés sur la saisie utilisateur
- **Notifications par courriel** - Réponses automatiques et alertes d'administration
- **Collecte de données** - Stocker les soumissions dans la base de données WordPress
- **Protection anti-spam** - Mesures de sécurité intégrées

### **Support Multilingue (WPML)**

Naviguez vers **WPML > Langues** pour gérer le contenu multilingue.

![Paramètres des Langues WPML](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-10_01_wpml-languages-settings.png)
*Interface de l'extension WPML pour gérer le contenu de site Web multilingue*

#### **Capacités WPML :**
- **Support de langues multiples** - Ajoutez n'importe quel nombre de langues
- **Traduction de contenu** - Traduisez pages, articles et contenu personnalisé
- **Traduction de menus** - Navigation séparée pour chaque langue
- **Gestion des médias** - Images et fichiers spécifiques aux langues
- **Optimisation SEO** - Implémentation appropriée des hreflang
- **Sélecteur de langue** - Permettez aux utilisateurs de changer de langues

### **Gestion des Extensions**

Naviguez vers **Extensions > Extensions Installées** pour gérer la fonctionnalité du site Web.

![Extensions Installées](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-13_01_installed-plugins.png)
*Liste complète des extensions installées avec statut d'activation*

#### **Ajout de Nouvelles Extensions**

![Ajouter une Nouvelle Extension](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-13_02_add-new-plugin.png)
*Répertoire d'extensions WordPress pour ajouter de nouvelles fonctionnalités*

---

# **Section 9 : Maintenance et Outils**

## Maintenance du Site, Import/Export et Utilitaires

La maintenance régulière et l'utilisation appropriée des outils WordPress assure que votre site Web reste sécurisé, rapide et fonctionnel. Comprendre ces utilitaires aide à prévenir les problèmes et permet une gestion efficace du site.

### **Outils WordPress**

Naviguez vers **Outils > Outils Disponibles** pour accéder aux utilitaires intégrés.

![Outils Disponibles](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-14_01_available-tools.png)
*Outils intégrés WordPress pour la maintenance et gestion du site*

### **Fonctionnalité d'Import**

Naviguez vers **Outils > Importer** pour apporter du contenu d'autres systèmes.

![Page d'Import](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-14_02_import-page.png)
*Outils d'import pour migrer le contenu depuis diverses plateformes*

### **Fonctionnalité d'Export**

Naviguez vers **Outils > Exporter** pour sauvegarder ou déplacer le contenu.

![Page d'Export](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-14_03_export-page.png)
*Outils d'export pour sauvegarder et migrer le contenu du site Web*

### **Gestion des Commentaires**

Naviguez vers **Commentaires** pour modérer les commentaires des utilisateurs.

![Gestion des Commentaires](https://raw.githubusercontent.com/grassriots/ceiu-wordpress-guide/main/screenshots/section-15_01_comments-management.png)
*Interface de modération et gestion des commentaires*

---

# **Section 10 : Conseils et Meilleures Pratiques**

## Optimisation du Flux de Travail et Dépannage

La gestion efficace de WordPress nécessite de comprendre à la fois les flux de travail quotidiens et les procédures de dépannage. Ces meilleures pratiques aident à maintenir un site Web professionnel, sécurisé et efficace.

### **Flux de Travail de Création de Contenu**

#### **Phase de Planification :**
1. **Stratégie de contenu** - Planifiez les sujets et calendrier de publication
2. **Recherche de mots-clés** - Identifiez les termes pour l'optimisation SEO
3. **Préparation des médias** - Rassemblez et optimisez les images avant la rédaction
4. **Création d'un plan** - Structurez le contenu avant la rédaction
5. **Processus de révision** - Établissez un flux d'approbation pour le contenu d'équipe

#### **Phase de Création :**
1. **Commencez par le titre** - Clair, descriptif, riche en mots-clés
2. **Rédigez en blocs** - Utilisez les types de blocs appropriés pour le contenu
3. **Ajoutez des médias** - Incluez des images pertinentes avec texte alternatif
4. **Liens internes** - Liez vers du contenu connexe sur votre site
5. **Optimisation SEO** - Méta-descriptions, titres, placement de mots-clés

### **Optimisation des Performances**

#### **Optimisation des Images :**
- **Redimensionnez avant téléchargement** - Ne comptez pas sur WordPress pour redimensionner
- **Choisissez les formats appropriés** - JPG pour les photos, PNG pour les graphiques
- **Compressez les images** - Équilibrez qualité et taille de fichier
- **Utilisez des noms de fichiers descriptifs** - Incluez des mots-clés quand pertinent
- **Ajoutez du texte alternatif** - Essentiel pour l'accessibilité et le SEO

### **Meilleures Pratiques de Sécurité**

#### **Gestion des Utilisateurs :**
- **Mots de passe forts** - Exigez des mots de passe complexes pour tous les utilisateurs
- **Permissions limitées** - Donnez aux utilisateurs l'accès minimum nécessaire
- **Audits réguliers** - Révisez et supprimez les comptes inactifs
- **Authentification à deux facteurs** - Ajoutez une couche de sécurité supplémentaire quand possible
- **Surveillez l'activité** - Observez les modèles de connexion inhabituels

### **Meilleures Pratiques SEO**

#### **Optimisation du Contenu :**
- **Recherche de mots-clés** - Ciblez les termes de recherche pertinents
- **Optimisation des titres** - Incluez les mots-clés primaires dans les titres
- **Méta-descriptions** - Rédigez des descriptions convaincantes pour les résultats de recherche
- **Structure des en-têtes** - Utilisez la hiérarchie H1, H2, H3 logiquement
- **Liens internes** - Connectez le contenu connexe

### **Dépannage des Problèmes Courants**

#### **Problèmes de Connexion :**
- **Videz le cache du navigateur** - Supprimez les données de connexion stockées
- **Vérifiez l'URL** - Assurez-vous d'utiliser la bonne adresse de connexion
- **Réinitialisez le mot de passe** - Utilisez le lien "Mot de passe oublié"
- **Compatibilité du navigateur** - Essayez un navigateur différent
- **Contactez l'administrateur** - Si tout le reste échoue

#### **Contenu qui n'Apparaît Pas :**
- **Vérifiez le statut de publication** - Assurez-vous que le contenu est publié, pas en brouillon
- **Révisez les permissions utilisateur** - Vérifiez l'accès pour modifier le contenu
- **Videz le cache** - Rafraîchissez le contenu mis en cache
- **Vérifiez la compatibilité du thème** - Certains thèmes peuvent ne pas afficher tous les types de contenu
- **Révisez les types d'articles personnalisés** - Assurez-vous de la configuration appropriée

---

## **Conclusion**

Ce guide complet fournit les bases pour une administration efficace de WordPress du site Web CEIU. La pratique régulière de ces procédures et l'adhésion aux meilleures pratiques assureront un fonctionnement fluide du site Web et une expérience utilisateur optimale.

### **Référence Rapide :**
- **Quotidien** : Surveillez les commentaires, vérifiez les mises à jour urgentes
- **Hebdomadaire** : Mettez à jour les extensions, révisez les analyses, modérez le contenu
- **Mensuel** : Sauvegarde complète, scan de sécurité, révision des performances
- **Trimestriel** : Mises à jour majeures, audit de contenu, révision de stratégie

### **Ressources de Support :**
- **Documentation WordPress** : wordpress.org/support
- **Support d'Extensions** : Vérifiez la documentation individuelle des extensions
- **Support de Thème** : Contactez le développeur du thème pour les problèmes spécifiques au thème
- **Support d'Hébergement** : Contactez le fournisseur d'hébergement pour les problèmes liés au serveur

### **Procédures d'Urgence :**
- **Site en panne** : Vérifiez le statut d'hébergement, contactez le fournisseur
- **Violation de sécurité** : Changez tous les mots de passe, scannez pour les logiciels malveillants, contactez un expert en sécurité
- **Perte de données** : Restaurez depuis la sauvegarde, contactez le fournisseur d'hébergement
- **Conflits d'extensions** : Désactivez les extensions, identifiez l'extension problématique

---

*Guide d'Administration WordPress CEIU - Documentation Complète*  
*Généré pour l'Équipe du Site Web | Dernière Mise à Jour : Janvier 2025* 