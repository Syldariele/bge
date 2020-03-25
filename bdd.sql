/* Creation d'un table: */
CREATE TABLE nom de la table (
    id INT PRIMARY KEY AUTO_INCREMENT, /* colone id obligatoire chiffre de clé primaire qui se rempli tout seul */
    COLONE_2 VARCHAR (50) NOT NULL UNIQUE, /* colonne 2 chaine de caractères, ne peut pas être vide sans doublon */
    colone_3 DATE NOT NULL, /* colonne 3, date au format AAA-MM-JJ, ne peut pas être vide */
);

/* Insertion dans une table (Create- RUD) */

INSERT INTO nom_de_la_table VALUES
    (NULL, 'valeur1', 'valeur2'), /* ajout ligne 1, la première colonne est id, on met NULL */
    (NULL, 'valeur1', 'valeur2'), /* ajout ligne 2 */
    (NULL, 'valeur1', 'valeur2'); /* ajout ligne 3 */

/*Lecture dans une table (C-Read-UD) */

SELECT id, colone_2, colone_3
    FROM nom_de_la_table
    WHERE colone_2 ='valeur à rechercher';

/* Modification de ligne dans une table (CR-Update-D) */

UPDATE nom_de_la_table
    SET colone_2 ='nouvelle valeur', colone_3 ='nouvelle valeur'
    WHERE colone_3 ='valeur à chercher'; /* attention sans clause where on modifie tout !!*/

/*Suppression de lignes dans une table (CRU-Delete) */

DELETE nom_de_la_table
    WHERE  colone_2 ='valeur à chercher'; /*Attention sans clause where, on supprime tout !! */
