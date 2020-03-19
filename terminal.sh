# DIVERS
cd <nom du fichier>                               # SE DEPLACER
node <nom du fichier>                             # LANCER UN SCRIPT NODE

#GIT
git init                                          # INITIALISER UN PROJET GIT
git add <nom du fichier/dossier>                  # AJOUTER LES MODIFICATIONS AU PROCHAIN COMMIT
git commit -m "<message à attacher au commit>"    #SAUVEGARDER LES MODIFICATION PRECEDEMENT AJOUTEES
git status                                        # AFFICHE L'ETAT DE MON PROJET GGIT 0 CET INSTANT
git log                                           #AFFICHE L'HISTORIQUE DES COMMITS
git restore <nom du fichier / dossier>             #REMET LE CONTENU DU FICHIER 0 L'ETAT DU DERNIER COMMIT
git checkout <nom de la branche ou hash du commit> # déplace la tête de lecture (HEAD) sur la branche ou le commite choisi
git branch <nom de la branche>                     #crée une branche en copiant la branche actuelle
git branch <nom de la branche> <branche à copier>  # copie la branche désiggnée dans une nouvelle branche ( ex: ggit branch blabla origin/blabla)
git branch                                         # liste les branches existantes
git merge  <nom de la branche>                     # fusionne la branche nommé à l'intérieur de la branche actuelle en créant un commit
git merge <nom de la branche> -m "<message du commit>" # même chose que la ligne précédente en fonction de l'ide
git remote                                         # liste les dépôts distants de notreprojet git
git remote add <nom du dépôt distant> <adresse du dépôt> # ajoute un nouveau dépôt distant (origin dans 99% des cas)
git push <nom du dépôt> <branche distante>         #envoie la branche courante sur la branche distante du dépôt choisi
git push -u <nom du dépôt> <branche distante>      # idem mais paramètre la branche local pour coresspondre à la branche distante
git clone <adresse du dépôt> <nom du dossier>      # télécharcge la branche  par défaut du dépôt choisi dans le dossier voulu
git pull <nom du dépôt> <brnahce distante>         # met à jour la brnahce actuelle avec les modifications effectuées sur la branche distante
