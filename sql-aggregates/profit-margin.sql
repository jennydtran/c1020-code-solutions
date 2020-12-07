/* List the 5 most profitable DVD titles in inventory. Profit is the amount of money made past the replacement cost. Don't forget, there are multiple copies of each film in inventory. You will likely benefit from first calculating the cost of each film and the revenue of each film in separate common table expressions.*/
-- go to films to get replacementCost, rental cost, filmId, and filmTitle
-- go to payments > sum(amounts) and group by rental id
-- go to rentals >  get inventoryId and rentalId to connect to payments in rentalId
-- PROFIT = revenue - cost
-- revenue = amount per film
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
