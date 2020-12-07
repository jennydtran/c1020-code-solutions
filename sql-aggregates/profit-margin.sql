with cte_filmCost as (
  select "films"."title" as "title",
         "films"."replacementCost",
         count("inventory"."filmId") as "copies",
         count("inventory"."filmId") * "films"."replacementCost" as "filmCost"
    from "films"
    join "inventory" using ("filmId")
group by "films"."filmId"
),
     cte_filmRevenue as (
  select "films"."title" as "title",
         count("rentals"."inventoryId") as "rentCount",
         sum("payments"."amount") as "filmRevenue"
    from "films"
    join "inventory" using ("filmId")
    join "rentals" using ("inventoryId")
    join "payments" using ("rentalId")
group by "films"."filmId"
)
select cte_filmCost."title" as "mostProfitableFilms",
       cte_filmRevenue."filmRevenue" - cte_filmCost."filmCost" as "profit"
  from cte_filmCost
  join cte_filmRevenue using ("title")
order by "profit" desc
   limit 5;
