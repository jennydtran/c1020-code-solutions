select "title",
       "releaseYear",
       "categories"."name" as "category"
  from "films"
  join "filmCategory"
    on "filmCategory"."filmId" = "films"."filmId"
  join "categories"
    on "categories"."categoryId" = "filmCategory"."categoryId"
 where "title" = 'Boogie Amelie';
