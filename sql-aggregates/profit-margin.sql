/* List the 5 most profitable DVD titles in inventory. Profit is the amount of money made past the replacement cost. Don't forget, there are multiple copies of each film in inventory. You will likely benefit from first calculating the cost of each film and the revenue of each film in separate common table expressions.*/
-- go to films to get replacementCost, rental cost, filmId, and filmTitle
-- go to payments > sum(amounts) and group by rental id
-- go to rentals >  get inventoryId and rentalId to connect to payments in rentalId
-- PROFIT = revenue - cost
-- cost = copiesofDvd * replacementCost
-- revenue = amount per film
with cte_filmCost as (
  -- select "films"."replacementCost" as "dvdCost",
  --        "rentalRate" * --count("inventory"."inventoryId") as "total",  <<<< hmmm...
  --        "films"."title"
  --   from "films"
  --   join "inventory" using ("filmId")
  --   join "rentals" using ("inventoryId")
  --       group by "films"."filmId"
)
select "total" - "dvdCost" as "profit",
       "title" as "top5MostProfitableFilms"
  from filmCostandRate
order by "profit" desc
 limit 5;
