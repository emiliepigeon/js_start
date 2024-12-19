ajout de fichier dans .gitignore // comment éviter d'avoir un commit avec le fichier à cacher visible
=> éviter de devoir faire un rebase

git add . est utilisé pour ajouter tous les fichiers modifiés et nouveaux dans le répertoire courant à l'index (staging area)5
. D'autre part, --cached est une option utilisée principalement avec git rm pour supprimer un fichier de l'index sans le supprimer du répertoire de travail2
6
. Si vous cherchez à ajouter des fichiers à l'index tout en excluant certains fichiers, vous pouvez utiliser git add avec des options spécifiques ou utiliser un fichier .gitignore pour exclure certains fichiers du suivi de version1
5
. Pour retirer des fichiers de l'index après les avoir ajoutés, vous pouvez utiliser git reset ou git rm --cached4
. Par exemple :

    git add . pour ajouter tous les fichiers
    Puis git rm --cached <fichier> pour retirer des fichiers spécifiques de l'index

Il est important de noter que ces commandes ont des effets différents sur l'état de votre dépôt Git et doivent être utilisées en fonction de vos besoins spécifiques.


EXO 9 à faire en affichage console blabla
